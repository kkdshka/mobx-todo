import React from "react";
import { TodoList } from "./TodoList";
import { todoStore } from "./todoStore";

function App() {
  return (
    <div className="App">
      <TodoList store={todoStore} />
    </div>
  );
}

export default App;
