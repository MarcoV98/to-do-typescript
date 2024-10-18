import React, { useRef } from 'react';
import { taskStore } from '../store/TaskStore';
import { useTranslation } from 'react-i18next';
import { useSnapshot } from 'valtio';

const Form: React.FC = () => {
	const inputText = useRef<HTMLInputElement>(null);

	const addTask = (text: string) => {
		taskStore.tasks.push({
			id: taskStore.tasks.length + 1,
			text,
		});
	};

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		if (!inputText.current) return;

		const enteredInput = inputText.current.value;

		if (enteredInput.trim().length > 0) {
			addTask(enteredInput);
			inputText.current.value = '';
		}
	};

	const tasksSnapshot = useSnapshot(taskStore);
	const count = tasksSnapshot.tasks.length;

	const { t } = useTranslation(['homepage']);

	return (
		<>
			<h1 className="task-wrapper__title">{t('homepage:welcomeMessage')}</h1>
			<p>{t('homepage:taskCount', { count: count })}</p>
			<form onSubmit={submitHandler} className="input-group">
				<input
					className="input-group__input"
					type="text"
					id="taskInput"
					placeholder={t('homepage:formInputPlaceholder')}
					ref={inputText}
					aria-label={t('homepage:formInputAria')}
				/>
				<button className="input-group__button" type="submit">
					<span className="button__body">{t('common:formBtnAdd')}</span>
				</button>
			</form>
		</>
	);
};

export default Form;
