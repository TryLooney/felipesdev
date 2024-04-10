import { Browser } from "@/components/browser";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="bg-grid-large-white/5 relative flex h-full min-h-screen w-full overflow-hidden rounded-lg">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background/50 to-background"></div>
        <div className="z-10 w-full p-20">
          <header>
            <Link href={"/"}>
              <h1 className="font-mono text-2xl text-muted-foreground">
                <span className="font-pacifico animate-text font-regular bg-blue-200 bg-gradient-to-r from-blue-200 via-foreground bg-clip-text text-5xl text-transparent">
                  Felipes
                </span>
                .dev
              </h1>
            </Link>
          </header>
          <div className="mt-12 flex w-full items-center justify-center">
            <Browser />
          </div>
        </div>
      </main>
    </>
  );
}
