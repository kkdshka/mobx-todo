import React from "react";
import { TodoList } from "./components/TodoList";
import { todoStore } from "./stores/todoStore";

function App() {
  return (
    <div className="App">
      <TodoList store={todoStore} />
    </div>
  );
}

export default App;
