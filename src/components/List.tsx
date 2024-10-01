import React, { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

const List: React.FC = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

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
