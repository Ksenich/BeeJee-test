import React from 'react';

const statusStrings = {
    0: 'pending',
    1: 'complete',
    10: 'edited',
    11: 'edited|complete'
};

const Task = (props) => {
    const { id, username, email, status } = props.task;
    const statusString = statusStrings[status];
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{statusString}</td>
        </tr>
    )
};

export default Task;