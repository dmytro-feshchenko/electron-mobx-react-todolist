import React, { Component } from 'react';

class TodoView extends Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={ this.onRename }>
                <input
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                { todo.text }
                { todo.assignee
                    ? <small>{ todo.assignee.name }</small>
                    : null
                }
            </li>
        )
    }

    /**
     * Change a completed status of the task
     * Sets status as completed if not completed yet.
     * Otherwise, sets a status as not completed.
     */
    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    /**
     * Calls a prompt for changing the task name
     */
    onRename = () => {
        const todo = this.props.todo;
        todo.text = prompt('Task name', todo.text) || "";
    }
}

export default TodoView;