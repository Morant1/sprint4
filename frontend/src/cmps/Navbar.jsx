import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { GlobalSearch } from './GlobalSearch';
import PersonIcon from '@material-ui/icons/Person';
// import {MenuList,MenuItem} from '@material-ui/core';



export class _Navbar extends Component {

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
                <nav className="main-nav flex align-center justify-between">
                    <ul className="nav-list flex">
                        <li className="logo"><Link to="/"><img src={require('../assets/img/logo.png')}/></Link></li>
                    </ul>
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    {this.props.loggedInUser && <div>Welcome {this.props.loggedInUser.username}</div>}
                    <button className="add-event-btn"><Link to="/add">Add Event</Link></button>
                    <button className="add-event-btn"><Link to="/login">LOGIN/SIGN UP/SIGNOUT</Link></button>
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
  
  export const Navbar = connect(mapStateToProps)(withRouter(_Navbar))


//   <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//   <MenuItem onClick={handleClose}>Profile</MenuItem>
//   <MenuItem onClick={handleClose}>My account</MenuItem>
//   <MenuItem onClick={handleClose}>Logout</MenuItem>
// </MenuList>