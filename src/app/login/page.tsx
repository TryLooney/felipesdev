"use client";

import { Github } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <>
      <MaxWidthWrapper className="flex min-h-screen w-full items-center justify-center text-center">
        <section className="flex h-full w-full flex-col items-center justify-center gap-8">
          <h1 className="flex text-center text-xl font-bold lg:text-3xl">
            Autentique-se
          </h1>
          <Button
            onPress={async () =>
              await signIn("github", {
                callbackUrl: callbackUrl ?? "/",
              })
            }
            color="secondary"
            className="w-[16rem] py-6"
          >
            <Github className="text-accent-800 h-5 w-5" /> Continuar com GitHub
          </Button>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
