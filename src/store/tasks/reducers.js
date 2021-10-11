import { combineReducers } from 'redux';
import { fetchTasks, createTask, updateTask } from './actions';

const defaultState = {
    tasks: {},
    currentPageTaskIds: [],
    taskList: [],
    currentPage: 0,
    totalTaskCount: 0
};

function tasksReducer(state = defaultState, action) {
    switch (action.type) {
        case fetchTasks.actionTypes.success:
            return {
                ...state,
                taskList: action.tasks,
                totalTaskCount: action.totalTaskCount,
            };
        case createTask.actionTypes.success:
            return {

            }
        case updateTask.actionTypes.success:
            return {
                
            }
        default: return state;
    }
}

export default combineReducers({
    tasks: tasksReducer,
    fetchTasksStatus: fetchTasks.reducer,
    createTaskStatus: createTask.reducer,
    updateTaskStatus: updateTask.reducer,
});
