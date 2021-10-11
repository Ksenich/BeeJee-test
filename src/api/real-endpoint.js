import axios from 'axios';
import qs from 'qs';

const baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
const developer = 'iksenich';

const instance = axios.create({
    baseURL,
    headers: {
        mimeType: "multipart/form-data",
        dataType: "json",
    }
});

/**
 * @param {('id' | 'username' | 'email' | 'status')=} sort_field - поле, по которому выполняется сортировка
 * @param {('asc'|'desc')=} sort_direction - направление сортировки
 * @param {number=} page - номер страницы для пагинации
 * @returns (Promise) 
 */
export const fetchTasks = (sort_field, sort_direction, page) => {
    const query = qs.stringify({ sort_field, sort_direction, page, developer });
    return instance
        .get(`?${query}`)
        .then(response => response.data);
};

export const createTask = (username, email, text) => {
    const query = qs.stringify({ developer });
    return instance
        .post(`create?${query}`, qs.stringify({ username, email, text }))
        .then(response => response.data);
}

export const login = (username, password) => {
    const query = qs.stringify({ developer });
    return instance
        .post(`login?${query}`, qs.stringify({ username, password }))
        .then(response => response.data);
}

export const updateTask = (taskId, token, text, status) => {
    const query = qs.stringify({ developer });
    return instance
        .post(`edit/${taskId}?${query}`, qs.stringify({ text, status, token }))
        .then(response => response.data);
}