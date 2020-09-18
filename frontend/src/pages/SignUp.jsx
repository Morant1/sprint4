import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../store/actions/userActions';

class _SignUp extends Component {
    state = {
        msg: '',
        signupCred: {
            email: '',
            password: '',
            username: ''
        }
    };

    signupHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }));
    };

    doSignup = async ev => {
        ev.preventDefault();
        const { email, password, username } = this.state.signupCred;
        if (!email || !password || !username) {
            return this.setState({ msg: 'All inputs are required!' });
        }
        const signupCreds = { email, password, username };
        this.props.signup(signupCreds);
        this.setState({ signupCred: { email: '', password: '', username: '' } });
        this.props.history.push('/toy')
    };

    removeUser = userId => {
        this.props.removeUser(userId);
    };

    render() {
        let signupSection = (
            <form onSubmit={this.doSignup}>
                <input
                    type="text"
                    name="email"
                    value={this.state.signupCred.email}
                    onChange={this.signupHandleChange}
                    placeholder="Email"
                />
                <br />
                <input
                    name="password"
                    type="password"
                    value={this.state.signupCred.password}
                    onChange={this.signupHandleChange}
                    placeholder="Password"
                />
                <br />
                <input
                    type="text"
                    name="username"
                    value={this.state.signupCred.username}
                    onChange={this.signupHandleChange}
                    placeholder="Username"
                />
                <br />
                <button>Signup</button>
            </form>
        );
        const { loggedInUser } = this.props;
        return (
            <div className="test">
                <h1>
                    This is a testing page for working with the Production Ready Server
        </h1>
                <h2>{this.state.msg}</h2>
                {loggedInUser && (
                    <div>
                        <h2>Welcome: {loggedInUser.username} </h2>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                )}
                {!loggedInUser && signupSection}
                {/* <h2>Login</h2>
        <form>div</form>

        <h2>Signup</h2>
        <form></form> */}

                <hr />
                <button onClick={this.props.loadUsers}>Get All Users</button>
                {this.props.isLoading && 'Loading...'}
                {this.props.users && <ul>

                    {this.props.users.map(user => (
                        <li key={user._id}>
                            <pre>{JSON.stringify(user, null, 2)}</pre>
                            <button
                                onClick={() => {
                                    this.removeUser(user._id);
                                }}
                            >
                                Remove {user.username}
                            </button>
                        </li>
                    ))}
                </ul>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};
const mapDispatchToProps = {
    signup
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp);
