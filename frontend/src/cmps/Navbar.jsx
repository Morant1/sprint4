import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import {GlobalSearch} from './GlobalSearch';


function _NavBar(props) {

    return (
        <nav className="nav-container flex align-center">
            <div className="nav-option"><Link to="/">Home</Link></div>
            <div className="nav-option"><Link to="/">About</Link></div>
            <GlobalSearch/>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)