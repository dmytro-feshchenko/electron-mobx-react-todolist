import shortid from 'shortid';
import mobx, { observable } from 'mobx';

/**
 * TodoStore - provides core methods to interact with
 * todos (such as creating, editing, removing, etc.)
 *
 * Example:
 *      todoStore.addTodo("Buy a bottle of milk in Wallmart after work")
 */
class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;
    
    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";

        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
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