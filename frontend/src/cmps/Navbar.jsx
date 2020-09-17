import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";


function _NavBar(props) {

    return (
        <nav className="nav-container flex align-center justify-center">
            <div className="nav-option"><Link to="/">Home</Link></div>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)