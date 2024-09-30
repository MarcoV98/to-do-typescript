import React, { createContext, useState, ReactNode } from "react";

interface TaskType {
  id: number;
  text: string;
}

interface TaskContextType {
  tasks: TaskType[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
}

interface TaskProviderType {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider: React.FC<TaskProviderType> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (enteredInput: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random(), text: enteredInput },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
