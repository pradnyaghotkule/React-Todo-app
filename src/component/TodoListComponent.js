import React from 'react';
import TodoDisplayComponent from './TodoDisplayComponent';
import TodoAddComponent from './TodoAddComponent';

class TodoListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { value: 'Create first todo', completed: false },
                { value: 'Create second todo', completed: false },
                { value: 'Create third todo', completed: false }
            ],

            currentTodo : [],

            completedTodos:[]

        };
        this.setState
        console.log(!this.state.todos.completed.length);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    countCompletedTodos(){

        let countTodo = !this.state.todos.completed.length
    }
    addNewTodo() {
        let todo = this.state.currentTodo;
        let newTodo = {
            value: todo,
            completed: false
        }
        let todos = this.state.todos
        todos.push(newTodo);
        console.log(this.state.todos);
        this.setState({
            todos
        })
        // clear the textbox after adding the todo
        todo = '';
        this.setState({
            totalTodos : todos.length
        })
    }

    completeTodo(index) {
        let todosTemp = this.state.todos;
        let todo = todosTemp[index];
        todo.completed = !todo.completed;
    }

    deleteTodo(index) {
        alert('Are you sure you want to delete the Todo?');
        let todosTemp = this.state.todos;
        todosTemp.splice(index, 1);

        this.setState({
            todosTemp
        });

    }

    updateTodo(event){
        this.setState({
            currentTodo : event.target.value
        })
    }

    render() {
        return (
            <ul>
                    <TodoAddComponent
                        addTodo={this.addNewTodo} 
                        currentTodo={this.state.currentTodo}
                        updateTodo={this.updateTodo}
                    />
                    <li>
                        <label>[{this.state.todos.length}/</label><label>{this.completeTodo}]</label>
                    </li>
                {
                    this.state.todos.map((todo, index) => {
                        return <TodoDisplayComponent
                            key={index} todoKey={index}
                            index={index}
                            clickHandler={this.completeTodo}
                            todo={todo}
                            deleteTodo={this.deleteTodo}
                        />
                    })
                }
                {/*<li>
                        <button id="newTodoBtn" title="Delete Completed Todos" 
                            name="Delete Completed Todos" onClick={this.deleteCompletedTodos}>
                            Delete Completed Todos
                        </button>
                </li>*/}
            </ul>
        );
    }
}

export default TodoListComponent;