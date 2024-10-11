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
    <form onSubmit={submitHandler} className="input-group" >
      <input
        className="input-group__input"
        type="text"
        id="taskInput"
        placeholder="Add your task..."
        ref={inputText}
        aria-label="Add the task you want to save here. It will be show below."
      />
      <button className="input-group__button" type="submit"><span className="button__body">Add</span></button>
    </form>
  );
};

export default Form;

