import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

export class _Footer extends Component {

    redirectClick = (tag) => {
        this.props.history.push(`/${tag}`)
    }

    render() {
        return (
            <footer className="footer-container margin container">
                <div className="main-footer flex justify-center">
                    <nav className="browse-container">Browse
                        <ul className="browse-list flex align-center">
                            <ul className="footer-item">
                                <li onClick={(ev) => { this.redirectClick('All') }}>All</li>
                                <li onClick={(ev) => { this.redirectClick('Art') }}>Art</li>
                            </ul>
                            <ul className="footer-item">
                                <li onClick={(ev) => { this.redirectClick('Books') }}>Books</li>
                                <li onClick={(ev) => { this.redirectClick('Comics') }}>Comics</li>
                            </ul>
                            <ul className="footer-item">
                                <li onClick={(ev) => { this.redirectClick('Movies') }}>Movies</li>
                                <li onClick={(ev) => { this.redirectClick('Sport') }}>Sport</li>
                            </ul>
                            <ul className="footer-item">
                                <li onClick={(ev) => { this.redirectClick('TVShows') }}>TV Shows</li>
                                <li onClick={(ev) => { this.redirectClick('Movies') }}>#1 Choice</li>
                            </ul>
                        </ul>
                    </nav>
                    <nav className="about-container">About
                        <ul className="about-list align-center">
                            <li className="footer-item bottom">Our Team</li>
                            <li className="footer-item top">Our Story</li>
                            {/* <li>Why Tuko?</li> */}
                        </ul>
                    </nav>
                    <nav className="help-container">Help
                        <ul className="help-list align-center">
                            <li className="footer-item bottom">Privacy Policy</li>
                            <li className="footer-item top">Terms and Conditions</li>
                        </ul>
                    </nav>
                </div>
                <nav className="social-container flex align-center">
                    <span className="logo"><Link to="/"> Even{`{t}`} Better</Link></span>
                    <ul className="social-list flex align-center justify-around">
                        <li>
                            <Link to="https://www.facebook.com/lital.gottlieb" target="_blank" />
                            <div className="fab fa-facebook-f">
                            </div>
                        </li>
                        <li><Link to="https://twitter.com/litalgottlieb" target="_blank" /><div className="fab fa-twitter"></div></li>
                        <li><Link to="#" target="_blank" /></li>
                    </ul>
                    <div className="copy-rights flex align-center"> © All Rights Reserved EventBetter - 2020</div>
                </nav>
            </footer>
        )
    }

}

export const Footer = withRouter(_Footer)


