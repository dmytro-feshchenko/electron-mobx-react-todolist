import React, { Component } from 'react';
import TodoView from './TodoView';
import './TodoList.css';

/**
 * TodoList - represents an interactive list
 * which shows all todos created by a user
 */
class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            todoText: ""
        }
    }

    render() {
        const store = this.props.store;
        return (
            <div>
                <div className="TodoList-create-task-form">
                    <input type="text"
                           className="TodoList-create-task-text-field"
                           placeholder="Type Task Name Here..."
                           onChange={this.onChangeNewTodoText} />
                    <button className="TodoList-add-button" onClick={ this.onNewTodo }>Create</button>
                </div>
                <ul>
                    { store.todos.map(
                        (todo, idx) => <TodoView todo={todo} key={todo.id} />
                    ) }
                </ul>
                {store.report}
            </div>
        )
    }

    onChangeNewTodoText = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }

    onNewTodo = () => {
        if (this.state.todoText !== "") {
            this.props.store.addTodo(this.state.todoText);
        }
    }
}

export default TodoList;