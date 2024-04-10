"use client";

import { HomeIcon, Mail, PiggyBank, Plus, RotateCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Gim } from "../icons/gim";
import { Yorpex } from "../icons/yorpex";
import { SumareRP } from "./sumarerp";

export function Browser() {
  const [page, setPage] = useState(0);

  return (
    <div className="grid aspect-video w-[65%] grid-cols-[auto,1fr,auto] overflow-hidden rounded-lg border bg-background shadow-2xl">
      <header className="h-full w-28">
        <div className="flex items-center justify-between px-2 pt-4">
          <div className="flex space-x-1">
            <div className="size-3 cursor-not-allowed rounded-full bg-green-500/50"></div>
            <div className="size-3 cursor-not-allowed rounded-full bg-yellow-500/50"></div>
            <div className="size-3 cursor-not-allowed rounded-full bg-red-500/50"></div>
          </div>
          <div className="flex space-x-1">
            <RotateCw className="size-4 cursor-not-allowed text-muted-foreground" />
          </div>
        </div>
        <div className="mt-2">
          <div className="relative mx-2 h-4 w-24 overflow-hidden rounded bg-foreground/[3.5%] px-2">
            <Link
              href="https://sumare.yorpex.app"
              tabIndex={page === 0 ? 0 : -1}
              className={`absolute truncate text-xs text-muted-foreground transition ${page === 0 ? "translate-y-0" : "translate-y-4"}`}
            >
              sumare.yorpex.app
            </Link>
            <Link
              href="https://gim.yorpex.app"
              tabIndex={page === 1 ? 0 : -1}
              className={`absolute truncate text-xs text-muted-foreground transition ${page === 0 ? "translate-y-4" : "translate-y-0"}`}
            >
              gim.yorpex.app
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-4 flex space-x-1 px-2">
            <div className="cursor-pointer rounded-lg bg-foreground/[3.5%] p-2">
              <HomeIcon className="size-3" />
            </div>
            <div className="cursor-not-allowed rounded-lg bg-foreground/[3.5%] p-2">
              <Mail className="size-3 text-muted-foreground" />
            </div>
            <div className="cursor-not-allowed rounded-lg bg-foreground/[3.5%] p-2">
              <PiggyBank className="size-3 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="mt-4 h-[1px] w-full bg-foreground/[3.5%]"></div>
        <div className="m-2">
          <span className="text-xs text-muted-foreground">Personal</span>
          <div className="mt-2 space-y-1">
            <button
              onClick={() => {
                setPage(0);
              }}
              className={`flex cursor-pointer items-center space-x-1 text-xs transition ${page !== 0 && "text-muted-foreground"}`}
            >
              <Yorpex className="size-3" />
              <span className="font-medium">Sumaré RP</span>
            </button>
            <button
              onClick={() => {
                setPage(1);
              }}
              className={`flex cursor-pointer items-center space-x-1 text-xs transition ${page !== 1 && "text-muted-foreground"}`}
            >
              <Gim className="size-3" />
              <span className="font-medium">Gim</span>
            </button>
          </div>
          <div className="mt-4 flex cursor-pointer items-center space-x-1">
            <span>
              <Plus className="size-3" />
            </span>
            <span className="text-xs">Nova aba</span>
          </div>
        </div>
      </header>
      <div className="w-full py-4 pr-4">
        <div className="overflow-y-scoll relative h-full overflow-x-hidden rounded-lg bg-foreground/[1%]">
          <div
            className={`absolute h-full w-full transition duration-500 ${page === 0 ? "traslate-x-0 opacity-100" : "translate-x-1/2 opacity-0"}`}
          >
            <SumareRP />
          </div>
          <div
            className={`absolute h-full w-full transition duration-500 ${page === 1 ? "traslate-x-0 opacity-100" : "translate-x-1/2 opacity-0"}`}
          >
            <div className="h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
