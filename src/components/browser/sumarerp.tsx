export function SumareRP() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-x-4 p-8">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold">Sumaré RP</h2>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <div className="size-2 rounded-full bg-foreground"></div>
            <span className="text-lg font-medium">Tecnologias</span>
          </div>
          <div className="flex h-32 w-full flex-col rounded-lg bg-foreground/[2.5%] p-2 font-mono text-sm">
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
          <div className="flex h-32 w-full flex-col rounded-lg bg-foreground/[2.5%] p-2 font-mono text-sm">
            <span className="text-green-600">+ Autenticação social</span>
            <span className="text-green-600">
              + Gestão e criação de formulários
            </span>
            <span className="text-green-600">+ Análise de dados</span>
            <span className="text-green-600">+ ...</span>
          </div>
        </div>
      </div>
      <div>teste</div>
    </div>
  );
}
