import Background from "@/components/background";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Terminal } from "@/components/terminal";
import { Link } from "@nextui-org/link";

export default async function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full">
        <Background />
        <MaxWidthWrapper className="relative z-10 flex min-h-screen flex-col items-center justify-center space-y-8">
          <Terminal
            title="FelipesDev"
            classNames={{
              wrapper: "w-[90%]",
              terminal: "h-[32rem]",
            }}
            messages={[
              {
                message: "{green}felipesdev {white}init",
                input: true,
                path: "~/",
                user: "felipesdev",
                typingSpeed: 0.025,
              },
              {
                message: "{reset}○ Compiling / ...",
                delay: 0,
                typingSpeed: 0.025,
              },
              {
                message: "{green}✓ {reset}ready in 0.01s",
                delay: 0,
                typingSpeed: 0.025,
              },
              {
                message:
                  "Bem vindo ao meu site, aqui você vai encontrar informações sobre mim e meus projetos.",
                delay: 0,
                typingSpeed: 0.025,
              },
              {
                message: "{green}felipesdev {white}social",
                input: true,
                path: "~/",
                user: "felipesdev",
                typingSpeed: 0.025,
              },
              {
                message: (
                  <span className="text-foreground-500">
                    Você pode entrar em contato pelos{" "}
                    <Link isExternal href="/links">
                      Links
                    </Link>{" "}
                    disponíveis.
                  </span>
                ),
                delay: 0,
                typingSpeed: 1,
              },
              {
                message: "{green}felipesdev {white}about",
                input: true,
                path: "~/",
                user: "felipesdev",
                typingSpeed: 0.025,
              },
              {
                message: (
                  <span className="flex space-x-2 text-foreground-500">
                    <span>Atualmente estou trabalhando em</span>
                    <Link
                      className="space-x-2 text-purple-500"
                      isExternal
                      href="https://dashinteractives.com"
                    >
                      <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                      <span>Dash Interactives</span>
                    </Link>
                  </span>
                ),
              },
              {
                message:
                  "Tenho uma vasta experiência em várias tecnologias, dentre elas: {purple}JavaScript{reset}, {purple}TypeScript{reset}, {purple}NodeJS{reset}, {purple}React{reset}, {purple}NextJS{reset}, {purple}tRPC{reset}, {purple}Prisma{reset} e {purple}TailwindCSS{reset}.",
                delay: 0,
                typingSpeed: 0.025,
              },
              {
                message: (
                  <span className="text-foreground-500">
                    Você pode se interar em tecnologia pelo meu{" "}
                    <Link isExternal href="/links">
                      Blog
                    </Link>
                    .
                  </span>
                ),
                delay: 0,
                typingSpeed: 0.025,
              },
            ]}
          />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
