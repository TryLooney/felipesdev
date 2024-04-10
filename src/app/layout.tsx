import "@/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Pacifico } from "next/font/google";

import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

const pacifico = Pacifico({
  weight: ["400"],
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata = {
  title: "Felipes",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background/50 p-2 font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
          pacifico.variable,
        )}
      >
        <TRPCReactProvider>
          <Providers>
            {children}
            <Toaster position="top-center" />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
