import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { ITodoStore, TodoStore } from "../stores/todoStore";
import { TodoView } from "./TodoView";
import { Button } from "./common/Button";
import { Wrapper } from "./common/Wrapper";
import styled from "styled-components";

const List = styled.li`
  list-style-type: none;
`;

export const TodoList = () => {
  const store: ITodoStore = useLocalStore(() => new TodoStore());
  const onNewTodo = () => {
    store.addTask(prompt("Enter a new task:", "coffee plz") || "");
  };

  return useObserver(() => (
    <main>
      <Wrapper color={"floralWhite"}>
        <h1>Tasks</h1>
        <List>
          {store.tasks.map((task, idx) => (
            <TodoView
              task={task}
              onComplete={store.completeTask}
              onDelete={store.deleteTask}
              onRename={store.renameTask}
              key={idx}
            />
          ))}
        </List>
        <Button onClick={onNewTodo}>New task</Button>
      </Wrapper>
    </main>
  ));
}
