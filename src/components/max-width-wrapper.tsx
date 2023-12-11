import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("mx-auto h-full w-full max-w-screen-xl", className)}>
      {children}
    </div>
  );
}
