import React from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <div className="App">
        <Form />
        <List />
    </div>
  );
};

export default App;
