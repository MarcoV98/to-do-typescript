import React from "react";

interface tasksProps {
  tasks: {
    id: number;
    text: string;
  }[];

  onDeleteHandler: (id: number) => void;
}

const List: React.FC<tasksProps> = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>
        <span>{task.text}</span>
        <button onClick={props.onDeleteHandler.bind(null, task.id )}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
