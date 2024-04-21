import { BlogWriter } from "@/components/blog-writer";

export default async function Blog() {
  return (
    <>
      <main className="relative flex h-full min-h-screen w-full overflow-hidden rounded-lg bg-grid-large-white/5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background/50 to-background"></div>
        <div className="z-10 w-full px-2 py-12 md:p-20">
          <BlogWriter />
        </div>
      </main>
    </>
  );
}
