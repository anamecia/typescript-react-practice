import React, { useRef } from "react";

interface NewTodoProps {
  addTodo: (todotext: string) => void;
}

const NewTodo: React.FC <NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addTodo(enteredText);
    textInputRef.current!.value = ''
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
