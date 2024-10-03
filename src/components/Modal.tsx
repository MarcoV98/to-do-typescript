import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { taskStore } from '../store/TaskStore';

interface ModalProps {
	closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
	const { tasks } = useSnapshot(taskStore);
	const [editId, setEditId] = useState<number | null>();
	const [editText, setEditText] = useState('');

	const deleteTask = (id: number) => {
		taskStore.tasks = taskStore.tasks.filter((task) => task.id !== id);
	};

	const resetEdit = () => {
		setEditText('');
		setEditId(null);
	};

	const editTask = () => {
		if (editId) {
			const taskToEdit = taskStore.tasks.find((task) => task.id === editId);
			if (taskToEdit) {
				taskToEdit.text = editText;
				console.log(editText);
				resetEdit();
			}
		}
	};

	useEffect(() => {
		if (!tasks.length) {
			closeModal();
		}
	}, [tasks, closeModal]);

	return (
		<div className="modal">
			<h3>Edit your tasks:</h3>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<span>{task.text}</span>
						<button
							type="button"
							onClick={() => {
								setEditId(task.id);
								setEditText(task.text);
							}}
						>
							Edit
						</button>
						<button type="button" onClick={() => deleteTask(task.id)}>
							Delete
						</button>
					</li>
				))}
				<button onClick={closeModal}>Close</button>
			</ul>

			{editId && (
				<div>
					<input
						type="text"
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
					/>
					<button onClick={editTask}>Save</button>
				</div>
			)}
		</div>
	);
};

export default Modal;
