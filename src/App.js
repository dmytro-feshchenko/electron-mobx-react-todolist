import React, { Component } from 'react';
import logo from './logo-todo.svg';
import './App.css';
import TodoList from './TodoList';
import ObservableTodoStore from './ObservableTodoStore';

class App extends Component {
    render() {
        const observableTodoStore = new ObservableTodoStore();
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>TodoList</h2>
                </div>
                <div className="App-intro">
                    <TodoList store={observableTodoStore} />
                </div>
            </div>
        );
    }
}

export default App;
