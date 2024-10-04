import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import { taskStore } from '../store/TaskStore';
import Modal from './Modal';

const List: React.FC = () => {
  const { tasks } = useSnapshot(taskStore);
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>();

  const openModal = (id: number) => {
    setEditId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditId(null);
  };

  const deleteTask = (id: number) => {
    taskStore.tasks = taskStore.tasks.filter((task) => task.id !== id);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => openModal(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {isOpen && editId && (
        <Modal closeModal={closeModal} taskId={editId} />
      )}
    </div>
  );
};

export default List;