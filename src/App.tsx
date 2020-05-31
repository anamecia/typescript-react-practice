import React, { useState } from "react";
import { Todo } from "./todo.model";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text}]);
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
