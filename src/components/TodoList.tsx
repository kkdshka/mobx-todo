import React from "react";
import { observer } from "mobx-react";
import { ITodoStore } from "../stores/todoStore";
import { TodoView } from "./TodoView";
import { Button } from "./common/Button";
import { Wrapper } from "./common/Wrapper";
import styled from "styled-components";

type Props = {
  store: ITodoStore;
};

const List = styled.ol`
  list-style-type: none;
`;

export const TodoList = observer(({ store }: Props) => {
  const onNewTodo = () => {
    store.addTask(prompt("Enter a new task:", "coffee plz") || "");
  };

  return (
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
  );
});
