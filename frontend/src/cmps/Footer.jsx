import React from 'react'
import { Link } from 'react-router-dom'


export function Footer() {
    return (
        <footer className="main-footer margin flex container">
            <ul className="social-list flex align-center justify-around">
                <div className="footer-logo"><img src={require('../assets/img/logo-1.png')} /></div>
                <li>
                    <Link to="https://www.facebook.com/lital.gottlieb" target="_blank" />
                    <div class="fab fa-facebook-f">
                    </div>
                </li>
                <li><Link to="https://twitter.com/litalgottlieb" target="_blank" /><div class="fab fa-twitter"></div></li>
                <li><Link to="#" target="_blank" /></li>
            </ul>
            <div className="copy-rights flex align-center"> © All Rights Reserved EventBetter - 2020</div>
        </footer>
    )
}


