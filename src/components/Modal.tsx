import React, { useState } from 'react';
import { taskStore } from '../store/TaskStore';
import { useTranslation } from 'react-i18next';

interface IModalProps {
	closeModal: () => void;
	taskId: number;
}

const Modal: React.FC<IModalProps> = ({ closeModal, taskId }) => {
	const taskToEdit = taskStore.tasks.find((task) => task.id === taskId);
	const [editText, setEditText] = useState(taskToEdit ? taskToEdit.text : '');

	if (!taskToEdit) {
		return <></>;
	}

	const editTask = () => {
		taskToEdit.text = editText;
		closeModal();
	};

	const {t} = useTranslation(['homepage']);

	return (
		<div className="modal">
			<h3 className="modal__title">{t('homepage:modalTitle')}</h3>
			<input
				className="modal__input"
				type="text"
				value={editText}
				onChange={(e) => setEditText(e.target.value)}
				aria-label={`${t('homepage:modalInputAria')} ${editText}`}
				aria-required="true"
			/>
			<button className="button" onClick={editTask}>
				<span className="button__body">{t('common:modalBtnSave')}</span>
			</button>
			<button className="button" onClick={closeModal}>
				<span className="button__body">{t('common:modalBtnClose')}</span>
			</button>
		</div>
	);
};

export default Modal;
