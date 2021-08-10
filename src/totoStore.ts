import { action, makeObservable, observable } from "mobx";
import { nanoid } from "nanoid";

export interface ITask {
  id: string | number;
  description: string;
  completed: boolean;
}

export interface ITodoStore {
  tasks: Array<ITask>;
  addTask: (description: string) => void;
  // completeTask: (taskId: string) => void;
  // deleteTask: (taskId: string) => void;
}

class TodoStore implements ITodoStore {
  tasks: Array<ITask> = loadTasks();

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      // completeTask: action,
      // deleteTask: action,
    });
  }

  addTask(description: string) {
    this.tasks.push({
      id: nanoid(10),
      description: description,
      completed: false,
    });
    this.saveTasks();
  }

  // completeTask(id: string) {}
  //
  // deleteTask(id: string) {}

  private saveTasks(): void {
    const storage = window.localStorage;

    storage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

function loadTasks(): Array<ITask> | [] {
  const data = window.localStorage.getItem("tasks");

  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}

export const todoStore = new TodoStore();