import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { GlobalSearch } from './GlobalSearch';
import PersonIcon from '@material-ui/icons/Person';


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
                <nav className="main-nav flex align-center justify-between container">
                    <ul className="nav-list flex">
                        <li className="logo"><Link to="/"><img src={require('../assets/img/logo.png')}/></Link></li>
                    </ul>
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <button className="add-event-btn"><Link to="/add">Add Event</Link></button>
                </nav>
            </React.Fragment >
        )
    }
}
export const Navbar = withRouter(_Navbar)