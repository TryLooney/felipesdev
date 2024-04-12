import { Browser } from "@/components/browser";
import { ProgrammerEffect } from "@/components/programmer-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import { UserCard } from "@/components/ui/user-card";
import { cn } from "@/lib/utils";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="relative flex h-full min-h-screen w-full overflow-hidden rounded-lg bg-grid-large-white/5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background/50 to-background"></div>
        <div className="z-10 w-full px-2 py-12 md:p-20">
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
          <section className="mt-24 flex min-h-[80vh] w-full flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="flex gap-x-2 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Sou{" "}
                <b className="item-center relative flex justify-center">
                  programador
                  <ProgrammerEffect />
                </b>
              </h1>
              <h2 className="text-center text-lg leading-7">
                E eu posso fazer sua solução ir além do que você imagina
              </h2>
            </div>
            <div className="">
              <CardContainer className="">
                <CardBody className="group/card relative h-48 w-96 rounded-lg border bg-background/50 p-4">
                  <CardItem translateZ="80" className="w-full">
                    <div className="relative flex items-center justify-between">
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
                        }}
                      />
                      <div className="mt-5 flex space-x-1">
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                      </div>
                    </div>
                  </CardItem>
                  <CardItem translateZ="40" className="w-full">
                    <p className="mt-10 text-muted-foreground">
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
