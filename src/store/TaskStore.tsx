import { proxy } from 'valtio';

interface Task {
	id: number;
	text: string;
}

const store = proxy({
	tasks: [] as Task[],
	nextId: 1,
	addTask: (text: string) => {
		store.tasks.push({
			id: store.nextId++,
			text,
		});
	},
	deleteTask: (id: number) => {
		store.tasks = store.tasks.filter((task) => task.id !== id);
	},
});

export const TaskStore = store;
