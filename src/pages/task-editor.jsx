import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskEditor from 'components/task-editor';
import api from 'api';
import { createTask } from 'store/tasks/actions';
import { isFunction } from 'src/utils';

class TaskEditorContainer extends Component {
    handleSubmitTask = (task) => {
        const { createTask } = this.props;
        if (isFunction(createTask)) {
            createTask(task);
        }
    }

    render() {
        const { tasks, isFetching, error } = this.props;
        const { handleSubmitTask } = this;
        return <TaskEditor onSubmit={handleSubmitTask} />
    }
}

const mapStateToProps = state => {
    const { data = {}, fetchingStatus = {} } = state.tasks;
    return {
        isSending: false,
        task: null,
        error: fetchingStatus.error
    };
};

const mapDispatchToProps = {
    createTask: createTask.wrap(api.createTask)
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditorContainer);