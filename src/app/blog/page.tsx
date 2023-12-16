import { Blog as BlogMain } from "@/components/layout/blog";
import { BlogHeader } from "@/components/layout/blog/header";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Blog() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect("/login?callbackUrl=/blog");
  }

  return (
    <>
      <MaxWidthWrapper className="mt-32 flex max-w-screen-xl flex-col items-center justify-center space-y-16 lg:px-8">
        <BlogHeader />
        <BlogMain id="GENERAL" />
      </MaxWidthWrapper>
    </>
  );
}
