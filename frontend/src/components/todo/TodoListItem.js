import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
    }
    onClickClose() {
        this.props.removeItem(this.props.item._id);
    }
    render () {
        const {date,value} = this.props.item;
        const formattedDate = new Date(date).toLocaleDateString();
        return(
            <li className="list-group-item ">
                        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" >{value}</span>
                        <span  className="glyphicon glyphicon-ok icon" aria-hidden="true">{formattedDate}</span>
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            </li>
        );
    }
}

export default TodoListItem;
