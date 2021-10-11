import React, { Component } from 'react';
import { isFunction } from 'src/utils';

const emptyTask = {
    email: '',
    text: '',
};

class TaskEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasUnsavedChanges: false,
            task: props.task || emptyTask,
        };
    }

    handleChange = () => {
        this.setState({
            hasUnsavedChanges: true,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (isFunction(this.props.onSubmit)) {
            const data = new FormData(event.target);
            this.props.onSubmit(data);
        }
    }

    render() {
        const { validation, isSaving } = this.props;
        const { task } = this.state;
        const { handleSubmit, handleChange } = this;
        return <form onSubmit={this.handleSubmit} >
            <input name="email" type="text" defaultValue={task.email} onChange={handleChange} />
            <textarea name="text" id="" cols="30" rows="10" onChange={handleChange} defaultValue={task.text}/>
            <input type="submit" disabled={isSaving} value="Save"/>
        </form>
    }
}

export default TaskEditor;