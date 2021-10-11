const storage = window.localStorage;
/**
 * @param {('id' | 'username' | 'email' | 'status')=} sort_field - поле, по которому выполняется сортировка
 * @param {('asc'|'desc')=} sort_direction - направление сортировки
 * @param {number=} page - номер страницы для пагинации
 * @returns (Promise) 
 */
export const fetchTasks = (sort_field, sort_direction, page) => {
    const tasks = JSON.parse(storage.getItem('tasks') || '[]');
    const tasks_per_page = 3;
    const slice = tasks.slice(tasks_per_page * (page || 0), page ? tasks_per_page * (page + 1) : tasks_per_page);
    return Promise.resolve({
        tasks: slice,
        total_task_count: tasks.length,
        page: page || 0,
    });
};

export const createTask = (username, email, text) => {
    const tasks = JSON.parse(storage.getItem('tasks') || '[]');
    const newTask = { id: tasks.length + 1, username, email, text, status: '0', image_path: '' };
    tasks.push(newTask);
    storage.setItem('tasks', JSON.stringify(tasks));
    return Promise.resolve(newTask);
}

export const login = (username, password) => {
    storage.setItem('username', username);
    const token = String(Date.now());
    return Promise.resolve({ token });
}

export const updateTask = (taskId, token, text, status) => {
    const tasks = JSON.parse(storage.getItem('tasks') || '[]');
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return Promise.reject({
            message: 'task not found'
        });
    }
    if (typeof text === 'string') {
        task.text = text;
    }
    if(typeof status === 'string'){
        task.status = status;
    }
    storage.setItem('tasks', JSON.stringify(tasks));
    return Promise.resolve();
}