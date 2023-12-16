import { Discord, Github, Twitch, Twitter } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
};

export default async function Links() {
  return (
    <>
      <main>
        <MaxWidthWrapper className="flex min-h-screen flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="h-24 w-24 rounded-full bg-accent-foreground"></div>
            <h1 className="text-4xl font-bold">Luis Felipe</h1>
            <h2 className="text-lg text-foreground-500">@felipesdev</h2>
          </div>
          <div className="flex w-[16rem] flex-col items-center justify-center space-y-4">
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              size="lg"
              isExternal
              href="https://dashinteractives.com"
              className="w-full"
            >
              <div className="h-5 w-5 rounded-full bg-purple-500" />
              Dash Interactives
            </Button>
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              size="lg"
              isExternal
              href="https://github.com/TryLooney"
              className="w-full"
            >
              <Github className="h-5 w-5" />
              Github
            </Button>
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              size="lg"
              isExternal
              href="https://discord.gg/JX3RzFpaZ4"
              className="w-full"
            >
              <Discord className="h-5 w-5" />
              Discord
            </Button>
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              size="lg"
              isExternal
              href="https://x.com/@felipesdev"
              className="w-full"
            >
              <Twitter className="h-5 w-5" />
              Twitter (X)
            </Button>
            <Button
              as={Link}
              variant="ghost"
              color="primary"
              size="lg"
              isExternal
              href="https://www.twitch.tv/felipesdev"
              className="w-full"
            >
              <Twitch className="h-5 w-5" />
              Twitch
            </Button>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
}
