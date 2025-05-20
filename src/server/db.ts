// filepath: /taskmaster/taskmaster/src/server/db.ts
type Task = {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date;
    completed?: boolean;
};

let tasks: Task[] = [];
let nextId = 1;

export const createTask = (title: string, description: string): Task => {
    const newTask: Task = {
        id: nextId++,
        title,
        description,
        createdAt: new Date(),
        updatedAt: undefined,
        completed: false,
    };
    tasks.push(newTask);
    return newTask;
};

export const getTasks = (): Task[] => {
    return tasks;
};

export const updateTask = (updatedData: Partial<Omit<Task, 'createdAt' | 'updatedAt'>>): Task | null => {
    const taskIndex = tasks.findIndex(task => task.id === updatedData.id);
    if (taskIndex === -1) return null;

    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
    tasks[taskIndex].updatedAt = new Date(); // Update the updatedAt field
    return tasks[taskIndex];
};

export const deleteTask = (id: number): boolean => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return false;

    tasks.splice(taskIndex, 1);
    return true;
};