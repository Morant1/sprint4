import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { GlobalSearch } from './GlobalSearch';
import PersonIcon from '@material-ui/icons/Person';
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

    onNotifiction = () => {
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
            <React.Fragment>
                <nav className="main-nav container flex align-center justify-between">

                    <article className="logo">
                        <Link to="/"> Even<span className="gray">{`{`}</span>{`t`}<span className="gray">{`}`}</span> Better</Link></article>

                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <button className="add-event-btn"><Link to="/add">Add Event</Link></button>
                    <div className="user-nav flex justify-center align-center">
                        {this.props.loggedInUser && <div className="nav-welcome">Welcome {this.props.loggedInUser.username}</div>}  
                        <img className="activities-icon" onClick={this.onNotifiction} src={require('../assets/icons/notification.svg')} />
                        <div className="user-notification align-center justify-center" style={this.getStyle()}>
                        {this.props.loggedInUser &&<UserNotifications />}
                        </div>
                        <img onClick={this.onUser} className="user-icon" src={require('../assets/icons/person-circle-outline.svg')} />
                        {this.state.isUserProfile &&
                            <ul className="user-menu">
                                {/* <li onClick={this.onUser}>Profile</li> */}
                                <li onClick={this.onUser}><Link to="/login">Login</Link></li>
                                <li onClick={this.onLogout}>Logout</li>
                            </ul>}
                    </div>
                </nav>


            </React.Fragment >
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

