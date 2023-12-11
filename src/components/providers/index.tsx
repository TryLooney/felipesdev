/* eslint-disable @typescript-eslint/unbound-method */
"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children?: ReactNode }) {
  const router = useRouter();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
