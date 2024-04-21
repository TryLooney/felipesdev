import { Browser } from "@/components/browser";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { UserCard } from "@/components/ui/user-card";
import { cn } from "@/lib/utils";
import { ExternalLink, Star, StarHalf } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="relative flex h-full min-h-screen w-full overflow-hidden rounded-lg bg-grid-large-white/5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background/50 to-background"></div>
        <div className="z-10 w-full px-2 py-12 md:p-16">
          <header className="flex items-center justify-between">
            <Link href={"/"} className="inline-block">
              <h1 className="font-mono text-xl text-muted-foreground sm:text-2xl">
                <span className="font-regular animate-text bg-blue-200 bg-gradient-to-r from-blue-200 via-foreground bg-clip-text font-pacifico text-4xl text-transparent sm:text-5xl">
                  Felipes
                </span>
                .dev
              </h1>
            </Link>
            <Link
              href={"/blog"}
              className={cn(
                buttonVariants({ className: "h-8 px-3 sm:h-10 sm:px-4" }),
                "gap-x-2",
              )}
            >
              Blog <ExternalLink className="size-4" />
            </Link>
          </header>
          <section className="mt-24 flex w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="flex gap-x-2 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Sou{" "}
                <Highlight className="item-center flex justify-center">
                  programador
                </Highlight>
              </h1>
              <h2 className="text-center text-xl leading-7">
                E eu posso fazer sua solução ir além do que você imagina
              </h2>
            </div>
            <div className="">
              <CardContainer>
                <CardBody className="group/card relative h-52 w-64 rounded-lg border bg-background/50 p-4 sm:h-48 sm:w-96">
                  <CardItem translateZ="80" className="w-full">
                    <div className="relative flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                      <UserCard
                        user={{
                          createdAt: new Date(2024, 3, 6, 0, 0, 0, 0),
                          id: "amigoarroz",
                          image: "https://github.com/amigoarroz.png",
                          name: "Arthur C.",
                        }}
                        project={{
                          id: "sumarerp",
                          name: "Sumaré RP",
                          url: "https://sumare.yorpex.app",
                        }}
                      />
                      <div className="absolute right-14 top-16 flex space-x-1 *:size-4 *:fill-yellow-500 *:text-yellow-500 sm:right-0 sm:top-6">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarHalf />
                      </div>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="absolute top-0 mt-28 w-full pr-6 sm:mt-20"
                  >
                    <p className="mt-4 text-center text-sm text-muted-foreground sm:text-left sm:text-base">
                      Me surpreendi com a performance do site que pedi. Sistemas
                      sem falhas e de alto desempenho!
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>
          <section className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">Projetos</h1>
            <Browser />
          </section>
        </div>
      </main>
    </>
  );
}
