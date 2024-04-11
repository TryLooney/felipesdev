import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function SumareRP() {
  return (
    <div className="grid-rows grid h-full w-full gap-x-4 p-8 lg:grid-cols-2">
      <div className="flex flex-col space-y-2">
        <Link
          href={"https://sumare.yorpex.app"}
          className="flex items-center space-x-2"
          target="_blank"
        >
          <h2 className="text-2xl font-bold">Sumaré RP</h2>
          <ExternalLink className="size-4" />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="size-2 rounded-full bg-foreground"></div>
            <span className="text-lg font-medium">Tecnologias</span>
          </div>
          <div className="flex w-full flex-col rounded-lg bg-foreground/[2.5%] p-2 py-2 font-mono text-sm">
            <span className="text-green-600">+ Typescript</span>
            <span className="text-green-600">+ NextJS</span>
            <span className="text-green-600">+ TailwindCss</span>
            <span className="text-green-600">+ Shadcn/UI</span>
            <span className="text-green-600">+ ...</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="size-2 rounded-full bg-foreground"></div>
            <span className="text-lg font-medium">Funcionalidades</span>
          </div>
          <div className="flex w-full flex-col rounded-lg bg-foreground/[2.5%] p-2 py-2 font-mono text-sm">
            <span className="text-green-600">+ Autenticação social</span>
            <span className="text-green-600">
              + Gestão e criação de formulários
            </span>
            <span className="text-green-600">+ Análise de dados</span>
            <span className="text-green-600">
              + Geração dinâmica de imagens
            </span>
            <span className="text-green-600">+ Permissões e cargos</span>
            <span className="text-green-600">+ ...</span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col space-y-2 border-t lg:mt-0 lg:border-t-0">
        <div className="mt-4 flex flex-col lg:mt-0">
          <div className="flex items-center space-x-2">
            <div className="size-2 rounded-full bg-foreground"></div>
            <span className="text-lg font-medium">Habilidades</span>
          </div>
          <div className="flex w-full flex-col rounded-lg bg-foreground/[2.5%] p-2 py-2 font-mono text-sm">
            <span className="text-green-600">+ Typescript</span>
            <span className="text-green-600">+ NextJS</span>
            <span className="text-green-600">+ TailwindCss</span>
            <span className="text-green-600">+ Shadcn/UI</span>
            <span className="text-green-600">+ ...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
