import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { CircleAdd } from "./Icons";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { Counter } from "./Counter";
import { Empty } from "./Empty";

export function Tasks() {
  const [tasks, setTasks] = useState([{ id: uuidv4(), title: "Organize seu dia!"}]);
  const [newTask, setNewTask] = useState("");
  const [count, setCount] = useState(1);
  const [complete, setComplete] = useState(0);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { id: uuidv4(), title: newTask }]);
    setNewTask("");
    setCount(count + 1);
  }
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
  }
  function completeTask() {
    setComplete(complete + 1);
  }
  function removeCompletedTask() {
    setComplete(complete - 1);
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }
  return (
    <div className="max-w-[1024px] mx-auto">
      <section>
        <form
          className="flex justify-center gap-2 pc:h-14 mob:h-12 mt-[-1.75rem] text-sm"
          onSubmit={handleCreateTask}
        >
          <input
            className="flex-1 placeholder-gray-300 bg-gray-500 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            type="text"
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button
            className="flex items-center border-2 border-transparent justify-center gap-1 w-24 bg-blue-700 text-gray-100 rounded hover:bg-blue-500 transition-colors"
            type="submit"
          >
            <span>Criar</span>
            <CircleAdd />
          </button>
        </form>
      </section>

      <section>
        <Counter onComplete={complete} onCount={count} />
      </section>

      <section>
        {count > 0 ? (
          <ul className="flex flex-col gap-3 mt-6">
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <Task
                    content={task}
                    onDeleteTask={deleteTask}
                    onCompleteTask={completeTask}
                    onRemoveCompletedTask={removeCompletedTask}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}
