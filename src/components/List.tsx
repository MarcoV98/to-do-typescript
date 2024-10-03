import React from "react";
import { useSnapshot } from "valtio";
import { taskStore } from "../store/TaskStore";

const List: React.FC = () => {
  const { tasks } = useSnapshot(taskStore);


  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
