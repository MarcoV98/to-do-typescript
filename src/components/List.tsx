import React, { useContext } from "react";
import { useSnapshot } from "valtio";
import { TaskStore } from "../store/TaskStore";

const List: React.FC = () => {
  const { tasks, deleteTask } = useSnapshot(TaskStore);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
