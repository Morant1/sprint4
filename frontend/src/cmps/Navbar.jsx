import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { GlobalSearch } from './GlobalSearch';
import { logout } from '../store/actions/userActions';
import { UserNotifications } from '../cmps/UserNotifications'

export class _Navbar extends Component {

    state = {
        isUserProfile: false,
        isNotify: false
    }

    onUser = () => {
        let { isUserProfile } = this.state;
        isUserProfile = !isUserProfile
        this.setState({ isUserProfile })
    }

    onLogout = () => {
        this.props.logout();
        this.onUser();
    }

    onNotification = () => {
        const isNotify = !this.state.isNotify
        this.setState({ isNotify })
    }
    getStyle = () => {
        return { 'display': this.state.isNotify ? 'flex' : 'none' }
    }

    componentDidMount() {
        const navbar = document.querySelector('nav')
        window.onscroll = function () {
            // pageYOffset or scrollY
            if (window.pageYOffset > 0) {
                navbar.classList.add('scrolled')

            } else {
                navbar.classList.remove('scrolled')

            }
        }
    }
    render() {
        return (
            
                <nav className={`main-nav container flex align-center justify-between ${this.props.location.pathname !== '/' ? 'dark' : ''}`}>
                    <span className="logo"><Link to="/"> Even{`{t}`} Better</Link></span>
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <ul className="user-nav flex justify-center align-center">
                        <li>{this.props.loggedInUser && <span className="nav-welcome">Welcome {this.props.loggedInUser.username}</span>}</li>
                        <li><span className="nav-icon activities-icon" onClick={this.onNotification}><div className="bell fas fa-bell fa-lg"></div></span></li>
                        <section className="notifications flex align-center justify-center" style={this.getStyle()}>
                            {this.props.loggedInUser && <UserNotifications />}
                        </section>
                        <li><span className="nav-icon user-icon" onClick={this.onUser}><div className="avatar fas fa-user-circle fa-lg"></div></span></li>
                        {this.state.isUserProfile &&
                            <ul className="user-menu">
                                {/* <li onClick={this.onUser}>Profile</li> */}
                                <li className="add-event-btn"><Link to="/add">Add Event</Link></li>
                                <li onClick={this.onUser}><Link to="/login">Login</Link></li>
                                <li onClick={this.onLogout}>Logout</li>
                            </ul>}
                    </ul>
                </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    };
};

const mapDispatchToProps = {
    logout
};

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Navbar))

