interface CounterProps {
  onComplete: number;
  onCount: number;
}

export function Counter({ onComplete, onCount }: CounterProps) {
  return (
    <div className="flex justify-between mt-16 text-sm">
      <div className="flex gap-2">
        <strong className="text-blue-500">Tarefas criadas</strong>
        <span className="flex justify-center px-2 py-[0.125rem] bg-gray-400 rounded-xl">
          {onCount}
        </span>
      </div>

      <div className="flex gap-2">
        <strong className="text-purple-500">Concluídas</strong>
        <span className="flex justify-center px-2 py-[0.125rem] bg-gray-400 rounded-xl">
          {onComplete} de {onCount}
        </span>
      </div>
    </div>
  );
}
