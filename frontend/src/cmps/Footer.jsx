import React from 'react'
import { Link } from 'react-router-dom'


export function Footer() {
    return (
        <footer className="footer-container margin container">
            <div className="main-footer flex justify-center">
                <nav className="browse-container">Browse
                    <ul className="browse-list flex align-center">
                        <ul className="footer-item">
                            <li>All</li>
                            <li>Art</li>
                        </ul>
                        <ul className="footer-item">
                            <li>Books</li>
                            <li>Comics</li>
                        </ul>
                        <ul className="footer-item">
                            <li>Movies</li>
                            <li>Sport</li>
                        </ul>
                        <ul className="footer-item">
                            <li>TV Shows</li>
                            <li>#1 Choice</li>
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


