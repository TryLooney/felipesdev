import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { type PostCategory } from "@prisma/client";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getPosts: protectedProcedure
    .input(z.object({ category: z.string().optional(), page: z.number() }))
    .query(async ({ ctx, input }) => {
      const options = {
        where: {
          category: input.category
            ? { equals: input.category as PostCategory }
            : undefined,
          published: true,
        },
      };

      const posts = await ctx.db.post.findMany({
        ...options,
        take: 5,
        skip: input.page * 5,
        orderBy: { createdAt: "desc" },
      });

      const postsFeatured = await ctx.db.post.findMany({
        ...options,
        take: 5,
        where: { featured: true },
        orderBy: { createdAt: "desc" },
      });

      const totalCount = await ctx.db.post.count({
        ...options,
      });

      return {
        error: null,
        response: {
          totalCount,
          posts,
          postsFeatured,
        },
      };
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  search: protectedProcedure
    .input(z.object({ query: z.string(), category: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.db.post.findMany({
        where: {
          name: {
            contains: input.query,
          },
          category: input.category
            ? { equals: input.category as PostCategory }
            : undefined,
          published: true,
        },
        take: 5,
        select: {
          id: true,
          name: true,
        },
      });
      return response;
    }),
});
