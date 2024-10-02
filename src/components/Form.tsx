import React, { useRef, useContext } from "react";
import { TaskStore } from "../store/TaskStore";

const Form: React.FC = () => {
  const inputText = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredInput = inputText.current!.value;

    if (enteredInput.trim().length > 0) {
      TaskStore.addTask(enteredInput);
      inputText.current!.value = ''
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="taskInput"></label>
      <input
        type="text"
        id="taskInput"
        placeholder="Add your task..."
        ref={inputText}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
