import React from 'react'
import { Link } from 'react-router-dom'


export function Footer() {
    return (
        <footer className="main-footer margin justify-space flex align-center">
            <ul className="social-list flex align-center justify-between">
            <div className="footer-logo"><img src={require('../assets/img/logo-1.png')}/></div>
            <li> <Link to="https://www.facebook.com/lital.gottlieb" target="_blank"/>Facebook</li>
            <li><Link to="https://twitter.com/litalgottlieb" target="_blank"/>Twitter</li>
            <li><Link to="#" target="_blank"/>LinkedIn</li>
            </ul>
        <div className="copy-rights"> © All Rights Reserved EventBetter - 2020</div>
        </footer>
    )
}


