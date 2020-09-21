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
                <nav className="nav-container flex align-center justify-between">
                    <div className="links flex">
                        <div className="logo">LOGO</div>
                        <div className="nav-option"><Link to="/">Home</Link></div>
                        <div className="nav-option"><Link to="/">About</Link></div>
                    </div>
                    {this.props.location.pathname !== "/" && <GlobalSearch />}
                    <button className="btn-nav-option"><Link to="/event/add">Add Event</Link></button>
                </nav>
            </React.Fragment >
        )
    }
}
export const Navbar = withRouter(_Navbar)