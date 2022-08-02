import { EmptyIcon } from "./Icons";

export function Empty() {
  return (
    <section className="border-t border-gray-400 mt-6 flex flex-col gap-4 items-center py-16">
      <EmptyIcon />
      <div className="grid w-[314px] text-gray-300">
        <span className="font-bold">
          Você ainda não tem tarefas cadastradas
        </span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  );
}
