import React, { createContext, useState, ReactNode } from "react";

interface Task {
  id: number;
  text: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});

let nextId = 1;

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (enteredInput: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: nextId++, text: enteredInput },
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
