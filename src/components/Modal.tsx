import React, { useState } from 'react';
import { taskStore } from '../store/TaskStore';

interface IModalProps {
  closeModal: () => void;
  taskId: number;
}

const Modal: React.FC<IModalProps> = ({ closeModal, taskId }) => {
  const taskToEdit = taskStore.tasks.find((task) => task.id === taskId);
  const [editText, setEditText] = useState(taskToEdit ? taskToEdit.text : '');

  if (!taskToEdit) {
    return (<p>no task found</p>)
  }

  const editTask = () => {
    taskToEdit.text = editText;
    closeModal();
  };

  return (
    <div className="modal">
	<h3>Edit your task:</h3>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={editTask}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;

