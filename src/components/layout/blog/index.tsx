"use client";

import { getCategory } from "@/lib/posts";
import { api } from "@/trpc/react";
import { Link } from "@nextui-org/link";
import { Skeleton } from "@nextui-org/skeleton";
import { type PostCategory } from "@prisma/client";
import { useSession } from "next-auth/react";

export function Blog({ id }: { id: PostCategory }) {
  const { status } = useSession();
  const { title } = getCategory(id);

  const posts = api.post.getPosts.useQuery(
    {
      category: id,
      page: 0,
    },
    {
      enabled: status === "authenticated",
    },
  );

  return (
    <main className="flex w-full flex-col items-start justify-center space-y-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="w-full">
        <ul id="featured"></ul>
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Mais recentes</h2>
          <ul
            id="latest"
            className="grid w-full grid-cols-2 justify-between gap-16"
          >
            {!posts.data?.response.posts.length && !posts.isLoading && (
              <li className="text-foreground-500">Nenhum post encontrado 😢</li>
            )}
            {posts.isLoading && <BlogLatestSkeleton />}
            {posts.data?.response.posts.map((post) => (
              <li className="col-span-1">
                <Link href={`/blog/${post.id}`}>{post.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

function BlogLatestSkeleton() {
  const skeletons = Array(8).fill(0);
  return (
    <>
      {skeletons.map((_, index) => (
        <li key={index} className="flex items-center justify-center">
          <div className="flex flex-col justify-center space-y-2">
            <Skeleton className="h-3 w-20 rounded-lg" />
            <Skeleton className="h-14 w-[32rem] rounded-lg" />
            <div className="flex items-center justify-start space-x-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-3 w-20 rounded-lg" />
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
