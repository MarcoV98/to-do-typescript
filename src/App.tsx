import React from "react";
import "./App.css";
import { TaskProvider } from "./store/TaskContext";

import Form from "./components/Form";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskProvider>
        <Form />
        <List />
      </TaskProvider>
    </div>
  );
};

export default App;
