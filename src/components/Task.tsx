import { useEffect, useState } from "react";
import { CheckCircle, Circle, Trash } from "./Icons";

interface TaskProps {
  content: {
    id: string;
    title: string;
  };
  onDeleteTask: (taskToDelete: string) => void;
  onCompleteTask: (taskToCompleted: string) => void;
  onRemoveCompletedTask: (taskToRemoveCompleted: string) => void;
}

export function Task({
  content,
  onDeleteTask,
  onCompleteTask,
  onRemoveCompletedTask,
}: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content.id);
    checked ? onRemoveCompletedTask(content.id) : null;
  }
  function handleCheckTask() {
    setChecked(!checked);
    checked ? onRemoveCompletedTask(content.id) : onCompleteTask(content.id);
  }
  return (
    <article className="flex flex-row gap-3 mob:p-4 pc:p-6 items-start text-sm bg-gray-500 rounded">
      <button onClick={handleCheckTask}>
        {checked ? <CheckCircle /> : <Circle />}
      </button>

      <div className="flex-1 leading-5">
        {checked ? (
          <p className="line-through text-gray-300">{content.title}</p>
        ) : (
          <p>{content.title}</p>
        )}
      </div>

      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </article>
  );
}
