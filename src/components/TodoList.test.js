import React from 'react';
import TodoList from './TodoList';
import ObservableTodoStore from '../store/ObservableTodoStore';
import renderer from 'react-test-renderer';

it("renders todos correctly", () => {
    let store = new ObservableTodoStore();
    store.addTodo("Reminder to buy milk after work");
    store.addTodo("Please, finish the report until tomorrow");
    store.addTodo("Complete online shopping transaction");

    store.todos[0].completed = true;

    const tree = renderer.create(
        <TodoList store={store} />
    );

    expect(tree).toMatchSnapshot();
});