import { observer } from "mobx-react";
import { ITask } from "../stores/todoStore";
import React from "react";
import styled from "styled-components";

type Props = {
  task: ITask;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, description: string) => void;
};

const ListItem = styled.li`
  padding: 5px;
`;

export const TodoView = observer(({ task, onComplete, onRename }: Props) => {
  const handleToggleCompleted = () => {
    onComplete(task.id);
  };

  const handleRename = () => {
    onRename(
      task.id,
      prompt("Task name", task.description) || task.description
    );
  };

  return (
    <ListItem onDoubleClick={handleRename}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      {task.description}
    </ListItem>
  );
});
