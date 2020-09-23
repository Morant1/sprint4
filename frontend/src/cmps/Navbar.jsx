import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { GlobalSearch } from './GlobalSearch';
import PersonIcon from '@material-ui/icons/Person';
import { logout } from '../store/actions/userActions';

export class _Navbar extends Component {

    state = {
        isUserProfile: false
    }

    onUser = () => {
        let {isUserProfile} = this.state;
        isUserProfile = !isUserProfile
        this.setState({isUserProfile})
    }

    onLogout = () => {
        this.props.logout();
        this.onUser();
    }
          
  

    componentDidMount() {
        const navbar = document.querySelector('nav')
        const logo = document.querySelector('span')

        window.onscroll = function () {

            // pageYOffset or scrollY
            if (window.pageYOffset > 0) {
                navbar.classList.add('scrolled')
                logo.classList.add('logo-scrolled')
            } else {
                navbar.classList.remove('scrolled')
                logo.classList.remove('logo-scrolled')
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <nav className="main-nav container flex align-center justify-between ">
                
        <article className="logo"><Link to="/"> Even<span className="gray">{`{`}</span>{`t`}<span className="gray">{`}`}</span> Better</Link></article>
                
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <button className="add-event-btn"><Link to="/add">Add Event</Link></button>
                    {this.props.loggedInUser && <div className="nav-welcome">Welcome {this.props.loggedInUser.username}</div>}
                    <img onClick={this.onUser} className="user-icon" src={require('../assets/icons/person-circle-outline.svg')} />
                    {this.state.isUserProfile && 
                    <ul className="user-menu">
                        <li onClick={this.onUser}>Profile</li>
                        <li onClick={this.onUser}><Link to="/login">Login</Link></li>
                        <li onClick={this.onLogout}>Logout</li>
                    </ul>}

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

export const Navbar = connect(mapStateToProps,mapDispatchToProps)(withRouter(_Navbar))

