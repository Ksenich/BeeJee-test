import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from 'components/task-list';
import api from 'api';
import { fetchTasks,createTask } from 'store/tasks/actions';
import { isFunction } from 'src/utils';

const LoadingPlaceholder = props => {
    return <div>loading</div>;
}

const ErrorPlaceholder = props => {
    return <div>error</div>;
}

class TaskListContainer extends Component {
    componentDidMount() {
        const { fetchTasks } = this.props;
        if (isFunction(fetchTasks)) {
            fetchTasks();
        }
    }

    handleOrderingChange = () => {

    }

    render() {
        const { tasks, isFetching, error } = this.props;
        if (error) {
            return <ErrorPlaceholder />
        }

        if (isFetching) {
            return <LoadingPlaceholder />
        }

        const { handleOrderingChange } = this;

        return <TaskList tasks={tasks} onChangeOrder={handleOrderingChange} />
    }
}

const mapStateToProps = state => {
    const { data = {}, fetchingStatus = {} } = state.tasks;
    return {
        isFetching: false,
        error: null,
        tasks: data.list || [],
        isFetching: fetchingStatus.isFetching || false,
        error: fetchingStatus.error
    };
};

const mapDispatchToProps = {
    fetchTasks: fetchTasks.wrap(api.fetchTasks),
    createTask: createTask.wrap(api.createTask)
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);