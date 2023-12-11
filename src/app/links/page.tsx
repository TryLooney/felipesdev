import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
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
              Twitter
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

function Discord({ className }: { className?: string }) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -28.5 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className={cn("h-4 w-4", className)}
    >
      <g>
        <path
          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
    >
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  );
}

function Twitter({ className }: { className?: string }) {
  return (
    <svg
      version="1.1"
      id="svg5"
      viewBox="0 0 1668.56 1221.19"
      className={cn("h-4 w-4", className)}
    >
      <g id="layer1">
        <path
          fill="currentColor"
          id="path1009"
          d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
        />
      </g>
    </svg>
  );
}

function Twitch({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
    >
      <path
        fill="currentColor"
        d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
