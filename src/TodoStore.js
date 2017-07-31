import shortid from 'shortid';

/**
 * TodoStore - provides core methods to interact with
 * todos (such as creating, editing, removing, etc.)
 *
 * Example:
 *      todoStore.addTodo("Buy a bottle of milk in Wallmart after work")
 */
class TodoStore {
    todos = [];

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    addTodo(text) {
        this.todos.push({
            id: shortid.generate(),
            text: text,
            completed: false,
            assignee: null
        })
    }
}

export default TodoStore;