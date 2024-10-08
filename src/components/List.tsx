import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import { taskStore } from '../store/TaskStore';
import Modal from './Modal';

const List: React.FC = () => {
  const { tasks } = useSnapshot(taskStore);
  const [editId, setEditId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setEditId(id);
  };

  const closeModal = () => {
    setEditId(null);
  };

  const deleteTask = (id: number) => {
    taskStore.tasks = taskStore.tasks.filter((task) => task.id !== id);
  };

  return (
    <ul className="list">
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <li className="list__item">
            <span>{task.text}</span>
            <div>
              <button className="button" onClick={() => openModal(task.id)}>
                <span className="button__body">Edit</span>
              </button>
              <button className="deleteBtn" onClick={() => deleteTask(task.id)}>
                <span className="button__body">Delete</span>
              </button>
            </div>
          </li>
		  
          {editId === task.id && (
            <div className="modal__container">
              <Modal closeModal={closeModal} taskId={editId} />
            </div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default List;
