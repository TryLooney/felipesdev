import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { cookies } from "next/headers";

import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "FelipesDev",
    template: "%s | FelipesDev",
  },
  description: "Inovando a maneira de programar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
