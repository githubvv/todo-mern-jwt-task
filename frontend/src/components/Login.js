import React, { Component } from 'react';
import AuthService from './AuthService';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Please sign in</div>
                <div className="card-header">Use login: user1 pwd: password OR login: user2 pwd: password </div>
                <div className="card-body">
                    <form method="post" onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="username-input">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username-input"
                                placeholder="Enter username"
                                name="username"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-input">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-input"
                                placeholder="Enter password"
                                name="password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }

    handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;
