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
		return <p>no task found</p>;
	}

	const editTask = () => {
		taskToEdit.text = editText;
		closeModal();
	};

	return (
		<div className="modal">
			<h3 className="modal__title">Edit your task:</h3>
			<input
				className="modal__input"
				type="text"
				value={editText}
				onChange={(e) => setEditText(e.target.value)}
				aria-label={`You are editing the task with this text: ${editText}`}
				aria-required="true"
			/>
			<button className="button" onClick={editTask}>
				<span className="button__body">Save</span>
			</button>
			<button className="button" onClick={closeModal}>
				<span className="button__body">Close</span>
			</button>
		</div>
	);
};

export default Modal;
