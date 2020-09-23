import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { loadUsers, login, logout, signup } from '../store/actions/userActions';

class _Login extends Component {
    state = {
        loginCred: {
            password: '',
            username: ''
        },
        signupCred: {
            password: '',
            username: ''
        }
    };

    componentDidMount = () => {
        this.props.loadUsers();
    }

    loginHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }));
    };

    signupHandleChange = ev => {
        let { name, value } = ev.target;
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }));
    };

    doLogin = async ev => {
    
        ev.preventDefault();
        const { username, password } = this.state.loginCred;
        if (!username || !password) {
            return this.setState({ msg: 'Please enter username/password' });
        }
        const userCreds = { username, password };
        const user = await this.props.login(userCreds);
        this.setState({ loginCred: { username: '', password: '' } });

        if (user) this.props.history.push('/');
        else  this.props.history.push('/login');
        
  
    };

    doSignup = async ev => {
        ev.preventDefault();
        const {password, username } = this.state.signupCred;
        if (!password || !username) {
            return this.setState({ msg: 'Username & password inputs are required!' });
        }
        const signupCreds = { password, username ,isGoing: false};
        const user = await this.props.signup(signupCreds);
        if (user) this.props.history.push('/');

        this.setState({ signupCred: { password: '', username: '' } });
    };

  //   onLogout = () => {
  //     this.props.logout()
  //         .then(res => this.props.history.push('/'))

  // }


    render() {
        return (
            <React.Fragment>
            <div className="log-sign-container flex">
                <form onSubmit={this.doSignup}>
                    <h2>{this.state.msg}</h2>
                    <input
                        type="text"
                        name="username"
                        value={this.state.signupCred.username}
                        onChange={this.signupHandleChange}
                        placeholder="Username"
                        autoComplete="off"
                        required
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        value={this.state.signupCred.password}
                        onChange={this.signupHandleChange}
                        placeholder="Password"
                        required
                    />
                    <br />

                    <Button type="submit" size="small" variant="contained">Signup</Button>
                </form>
                <form onSubmit={this.doLogin}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.loginCred.username}
                        onChange={this.loginHandleChange}
                        placeholder="Username"
                        autoComplete="off"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={this.state.loginCred.password}
                        onChange={this.loginHandleChange}
                        placeholder="Password"
                        required
                    />
                    <br />
                    <Button type="submit" size="small" variant="contained">Login</Button>
                </form>
                {/* <Button className="logout" onClick={this.onLogout} size="small" variant="contained">Logout
                    </Button> */}
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
        loggedInUser: state.userReducer.loggedInUser,
    };
};
const mapDispatchToProps = {
    login,
    logout,
    signup,
    loadUsers
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)
