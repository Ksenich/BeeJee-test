import React from 'react';
import { Provider } from "react-redux";
import store from 'store';
import TaskEditor from 'pages/task-editor';
import TaskList from 'pages/task-list';

const App = () => <Provider store={store}>
    <TaskEditor/>
    <TaskList />
</Provider>;
export default App;