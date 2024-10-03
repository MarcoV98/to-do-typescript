import { proxy } from 'valtio';

interface Task {
	id: number;
	text: string;
}

interface ITaskStore {
	tasks: Task[],
	/* addTask: (text: string) => void 
	deleteTask: (id: number) => void */
}

export const taskStore = proxy<ITaskStore>({
	tasks: [] as Task[],
	/* addTask: (text: string) => {
		taskStore.tasks.push({
			id: taskStore.tasks.length + 1,
			text,
		});
	},
	deleteTask: (id: number) => {
		taskStore.tasks = taskStore.tasks.filter((task) => task.id !== id);
	}, */
});

