import React, { Component } from 'react';

/**
 * TodoView component
 * Represents one task item
 */
class TodoView extends Component {
    /**
     * Constructor for TodoView
     * @param props
     */
    constructor(props) {
        super(props);
        
        this._onRename = this._onRename.bind(this);
        this._onToggleCompleted = this._onToggleCompleted.bind(this);

        this.state = {};
    }

    /**
     * Renders the task item
     * @returns {XML}
     */
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={ this._onRename }>
                <input
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ this._onToggleCompleted }
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
    _onToggleCompleted() {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    /**
     * Calls a prompt for changing the task name
     */
    _onRename() {
        const todo = this.props.todo;
        todo.text = prompt('Task name', todo.text) || "";
    }
}

export default TodoView;