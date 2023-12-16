import { type PostCategory } from "@prisma/client";

export const getCategory = (category: PostCategory) => {
  switch (category) {
    case "PROGRAMMING":
      return {
        title: "Programação",
        href: "/blog/category/programming",
      };

    case "BUSINESS":
      return {
        title: "Negócios",
        href: "/blog/category/business",
      };

    case "GENERAL":
      return {
        title: "Todas postagens",
        href: "/blog",
      };

    default:
      return {
        title: "Todas postagens",
        href: "/blog",
      };
  }
};

export const getCategoryByHref = (href: string) => {
  switch (href) {
    case "/blog/category/programming":
      return "PROGRAMMING";

    case "/blog/category/business":
      return "BUSINESS";

    case "/blog":
      return "GENERAL";

    default:
      return "GENERAL";
  }
};
