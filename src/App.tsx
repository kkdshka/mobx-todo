import { Provider } from "mobx-react";
import React from "react";
import { TodoList } from "./components/TodoList";
import { todoStore } from "./stores/todoStore";

function App() {
  return (
    <div className="App">
      <Provider
        store={todoStore}
      >
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
