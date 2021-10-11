import { createAsyncAction } from 'store/create-action';

export const fetchTasks = createAsyncAction('TASKS_FETCH');
export const createTask = createAsyncAction('TASK_CREATE');
export const updateTask = createAsyncAction('TASK_UPDATE');