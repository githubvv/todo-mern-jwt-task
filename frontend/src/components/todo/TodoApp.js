import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoService from './TodoServise';

class TodoApp extends Component {
    constructor (props) {
        super(props);
        this.todoService = new TodoService();
    }
    state = {
        todoItems: []
    };
    async componentDidMount() {
        const todoItems = await this.getItems();
        this.setState({todoItems});
    }

    getItems = async () => {
        let todoItems =[];
        try{
            const { todos } = await this.todoService.getItems(this.props.user.userId);
            todoItems = todos;
        }catch(err){
            alert("Can't fetch data ", err);
        }
        return todoItems;
    };
    addItem = async todoItem => {
        const newItem = {
            value: todoItem.itemDescr,
            date: todoItem.itemDate,
            done: false,
            userId: this.props.user.userId
        };
        try {
            const item = await this.todoService.addItem(newItem);
            const todoItems = [...this.state.todoItems, item];
            this.setState({todoItems});
        }catch(err){
            alert("Can't add item ", err);
        }
    };
    removeItem = async id => {
        try {
            const resp = await this.todoService.removeItem(id);
            const todoItems = this.state.todoItems.filter(item => item._id !== id);
            this.setState({todoItems});
        }catch(err){
            alert("Can't delete item ", err);
        }
    };

    render() {
        const {todoItems} = this.state;
        return (
            <div id="main">
                <TodoHeader />
                <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
                <TodoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default TodoApp;

