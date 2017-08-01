import React from 'react';
import ReactDOM from 'react-dom';
import TodoView from './TodoView';
import renderer from 'react-test-renderer';

it("renders correctly for not completed tasks", () => {

    const todo = {
        text: "Reminder to buy milk after work",
        completed: false
    };

    const tree = renderer.create(
        <TodoView todo={todo}/>
    );

    expect(tree).toMatchSnapshot();
});

it("renders correctly for completed tasks", () => {
    const todo = {
        text: "Reminder to buy milk after work",
        completed: true
    };

    const tree = renderer.create(
        <TodoView todo={todo}/>
    );

    expect(tree).toMatchSnapshot();
});

it("renders correctly for tasks with assignee", () => {
    const todo = {
        text: "Reminder to buy milk after work",
        completed: true,
        assignee: {
            name: "John Doe"
        }
    };

    const tree = renderer.create(
        <TodoView todo={todo}/>
    );

    expect(tree).toMatchSnapshot();
});