import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

const App: React.FC = () => {
  interface Task {
    id: number;
    text: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  const addHandler = (enteredInput: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Math.random(), text: enteredInput }]);
  };

  const deleteHandler = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.id !== id)
    })
  }

  return (
    <div className="App">
      <Form onAddHandler={addHandler} />
      <List tasks={tasks} onDeleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
