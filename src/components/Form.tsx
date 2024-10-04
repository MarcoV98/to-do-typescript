import React, { useRef } from "react";
import { taskStore } from "../store/TaskStore";

const Form: React.FC = () => {
  const inputText = useRef<HTMLInputElement>(null);

  const addTask = (text: string) => {
    taskStore.tasks.push({
      id: taskStore.tasks.length + 1,
      text,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.current) return;

    const enteredInput = inputText.current.value;

    if (enteredInput.trim().length > 0) {
      addTask(enteredInput);
      inputText.current.value = "";
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

