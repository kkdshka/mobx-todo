import React from 'react';
import {TodoList} from './TodoList'
import {todoStore} from "./totoStore";

function App() {
  return (
    <div className="App">
      <TodoList store={ todoStore }/>
    </div>
  );
}

export default App;
