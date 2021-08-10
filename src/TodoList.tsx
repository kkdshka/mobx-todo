import React from "react";
import { observer } from "mobx-react";
import { ITodoStore, ITask } from "./todoStore";

type Props = {
  store: ITodoStore;
};

export const TodoList = observer(({ store }: Props) => {
  const onNewTodo = () => {
    store.addTask(prompt("Enter a new todo:", "coffee plz") || "");
  };

  return (
    <div>
      <ul>
        {store.tasks.map((task, idx) => (
          <TodoView todo={task} key={idx} />
        ))}
      </ul>
      <button onClick={onNewTodo}>New task</button>
    </div>
  );
});

const TodoView = observer(({ todo }: { todo: ITask }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.description =
      prompt("Task name", todo.description) || todo.description;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.description}
    </li>
  );
});