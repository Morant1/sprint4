import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { GlobalSearch } from './GlobalSearch';


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
                <nav className="nav-container flex align-center space-between">
                    <ul className="nav-list flex">
                        <li className="logo">LOGO</li>
                        <div className="main-nav flex">
                        <li className="nav-option"><Link to="/">Home</Link></li>
                        <li className="nav-option"><Link to="/">About</Link></li>
                        </div>
                    </ul>
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <button className="add-event-btn"><Link to="/add">Add Event</Link></button>
                </nav>
            </React.Fragment >
        )
    }
}
export const Navbar = withRouter(_Navbar)