import React from 'react';
import ReactDOM from 'react-dom';
import ObservableTodoStore from './ObservableTodoStore';

it('contains empty tasks array by default', () => {
    const observableTodoStore = new ObservableTodoStore();
    expect(observableTodoStore.todos.length).toEqual(0);
});

it('method addTodo() adds a given task to the store tasks list', () => {
    const observableTodoStore = new ObservableTodoStore();

    for (let i = 0; i < 10; i++) {
        const taskName = `Test task #${i}`;
        observableTodoStore.addTodo(taskName);
        expect(observableTodoStore.todos.length).toEqual(i + 1);
        expect(observableTodoStore.todos[i].text).toEqual(taskName);
    }
});

it('property completedTodosCount returns count of completed tasks', () => {
    const observableTodoStore = new ObservableTodoStore();
    expect(observableTodoStore.completedTodosCount).toEqual(0);
    for (let i = 0; i < 5; i++) {
        const taskName = `Test task #${i}`;
        observableTodoStore.addTodo(taskName);
    }

    expect(observableTodoStore.completedTodosCount).toEqual(0);

    for (let j = 0; j < 5; j++) {
        // complete the task
        observableTodoStore.todos[j].completed = true;
        expect(observableTodoStore.completedTodosCount).toEqual(j + 1);
    }

});
