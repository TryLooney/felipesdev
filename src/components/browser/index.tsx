"use client";

import { HomeIcon, Mail, PiggyBank, Plus, RotateCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Gim } from "../icons/gim";
import { Yorpex } from "../icons/yorpex";
import { SumareRP } from "./sumarerp";

export enum PagesId {
  SumareRP = 0,
  Gim = 1,
}

export const Pages = [
  {
    id: PagesId.SumareRP,
    label: "Sumaré RP",
    icon: <Yorpex className="size-3" />,
    url: "sumare.yorpex.app",
  },
  {
    id: PagesId.Gim,
    label: "Gim",
    icon: <Gim className="size-3" />,
    url: "gim.yorpex.app",
  },
];

export function Browser() {
  const [page, setPage] = useState<PagesId>(PagesId.SumareRP);

  return (
    <div className="grid min-h-[90vh] w-[80%] grid-rows-[auto,1fr] overflow-hidden rounded-lg border bg-background shadow-2xl md:w-[50%] lg:aspect-video lg:min-h-max lg:w-[65%] lg:grid-cols-[auto,1fr] lg:grid-rows-[auto]">
      <header className="relative flex h-24 w-full flex-row items-start lg:h-full lg:w-28 lg:flex-col">
        <div className="flex w-full items-center justify-between px-0 pl-4 pt-4 lg:px-2">
          <div className="hidden space-x-1 lg:flex">
            <div className="size-3 cursor-not-allowed rounded-full bg-green-500/50"></div>
            <div className="size-3 cursor-not-allowed rounded-full bg-yellow-500/50"></div>
            <div className="size-3 cursor-not-allowed rounded-full bg-red-500/50"></div>
          </div>
          <div className="flex space-x-1">
            <RotateCw className="size-4 cursor-not-allowed text-muted-foreground" />
          </div>
        </div>
        <div className="mt-2">
          <div className="relative mx-2 mt-2 h-4 w-48 overflow-hidden rounded bg-foreground/[3.5%] px-2 lg:mt-0 lg:w-24">
            {Pages.map((pageWorking) => (
              <PageLink
                key={pageWorking.id}
                actualPage={page}
                page={pageWorking.id}
                url={pageWorking.url}
              />
            ))}
          </div>
        </div>
        <div className="absolute top-6 flex items-center justify-center lg:static lg:top-0">
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
        <div className="mt-4 hidden h-[1px] w-full bg-foreground/[3.5%] lg:flex"></div>
        <div className="absolute m-2 w-full lg:static">
          <span className="absolute left-24 top-[2.35rem] text-xs text-muted-foreground lg:static">
            Personal
          </span>
          <div className="absolute top-16 mt-2 flex w-full items-center space-x-2 lg:static lg:top-24 lg:block lg:space-x-0 lg:space-y-1">
            {Pages.map((pageWorking) => (
              <PageTab
                key={pageWorking.id}
                actualPage={page}
                page={pageWorking.id}
                label={pageWorking.label}
                icon={pageWorking.icon}
                setPage={setPage}
              />
            ))}
          </div>
          <div className="absolute left-40 top-[1.35rem] mt-4 flex cursor-not-allowed items-center space-x-1 lg:static">
            <span>
              <Plus className="size-3" />
            </span>
            <span className="text-xs">Nova aba</span>
          </div>
        </div>
      </header>
      <div className="w-full py-4 pr-4">
        <div className="relative h-full overflow-x-hidden overflow-y-scroll rounded-lg bg-foreground/[1%] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/10 [&::-webkit-scrollbar]:h-4 [&::-webkit-scrollbar]:w-1">
          <div
            className={`absolute h-full w-full transition duration-500 ${page === PagesId.SumareRP ? "traslate-x-0 opacity-100" : "translate-x-1/2 opacity-0"}`}
          >
            <SumareRP />
          </div>
          <div
            className={`absolute h-full w-full transition duration-500 ${page === PagesId.Gim ? "traslate-x-0 opacity-100" : "translate-x-1/2 opacity-0"}`}
          >
            <div className="h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLink({
  actualPage,
  page,
  url,
}: {
  actualPage: PagesId;
  page: PagesId;
  url: string;
}) {
  return (
    <Link
      id={`${page.toString().toLowerCase()}-url`}
      href={"https://" + url}
      tabIndex={actualPage === page ? 0 : -1}
      className={`absolute truncate text-xs text-muted-foreground transition ${actualPage === page ? "translate-y-0" : "translate-y-4"}`}
    >
      {url}
    </Link>
  );
}

function PageTab({
  actualPage,
  page,
  label,
  setPage,
  icon,
}: {
  actualPage: PagesId;
  page: PagesId;
  label: string;
  icon?: React.ReactNode;
  setPage: (page: PagesId) => void;
}) {
  return (
    <button
      onClick={() => {
        setPage(page);
      }}
      className={`flex cursor-pointer items-center space-x-1 text-xs transition ${actualPage !== page && "text-muted-foreground"}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
