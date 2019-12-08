import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemDescr.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        const itemDescr = this.refs.itemDescr.value;
        const itemDate = this.refs.itemDate.value;
        this.props.addItem({itemDescr, itemDate});
        this.refs.form.reset();
    }
    render () {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" required ref="itemDescr" className="form-control" placeholder="Description"/>
                <input type="date" required ref="itemDate" className="form-control" placeholder="Date"/>
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }
}

export default TodoForm;
