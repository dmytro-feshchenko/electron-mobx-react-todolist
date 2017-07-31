import React, { Component } from 'react';
import TodoView from './TodoView';
import './TodoList.css';

/**
 * TodoList - represents an interactive list
 * which shows all todos created by a user
 */
class TodoList extends Component {

    render() {
        const store = this.props.store;
        return (
            <div>
                {store.report}
                <ul>
                    { store.todos.map(
                        (todo, idx) => <TodoView todo={todo} key={todo.id} />
                    ) }
                </ul>
                <button onClick={ this.onNewTodo }>New Todo</button>
            </div>
        )
    }

    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
    }
}

export default TodoList;