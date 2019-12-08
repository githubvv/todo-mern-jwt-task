import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render () {
        const items = this.props.items.map(item => {
            return (
                <TodoListItem key={item._id} item={item} removeItem={this.props.removeItem} />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

export default TodoList;
