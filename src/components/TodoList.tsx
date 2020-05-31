import React from "react";

interface TodosListProps {
  todos: { id: string; text: string }[];
}

const TodoList: React.FC <TodosListProps> = (props) => {

  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
