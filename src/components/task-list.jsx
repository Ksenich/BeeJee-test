import React, { useCallback } from 'react';
import Task from 'components/task';

const SortFieldSelector = (props) => {
    return <select onChange={props.onChange}>
        <option>id</option>
        <option>username</option>
        <option>email</option>
        <option>status</option>
    </select>
}

const SortDirectionSelector = (props) => {
    return <select onChange={props.onChange}>
        <option>asc</option>
        <option>desc</option>
    </select>
}

const PageSelector = (props) => {
    const { onChange, pageCount } = props;
    const pageOptions = [];
    for (let i = 0; i < pageCount; ++i) {
        pageOptions.append(<option value={i}>{i}</option>);
    }
    return <select onChange={onChange}>
        {pageOptions}
    </select>
};

const TaskList = (props) => {
    const { tasks, pageCount, onChangeSortField, onChangeSortDirection, onChangePage } = props;
    const tasksRender = tasks.map(task => <Task />)
    return <table>
        <thead>
            <tr>
                <td colSpan="4">Sort by:
                    <SortFieldSelector onChange={onChangeSortField} />
                    <SortDirectionSelector onChange={onChangeSortDirection} />
                </td></tr>
            <tr>
                <td>username</td>
                <td>email</td>
                <td>text</td>
                <td>status</td>
            </tr>
        </thead>
        <tbody>
            {tasksRender}
            <tr><td colSpan="4"><PageSelector pageCount={pageCount} onChangePage={onChangePage} /></td></tr>
        </tbody>
    </table>;
};

export default TaskList;