import React from 'react'
import logo from '../images/logo.png'
import './style.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <img className='logo' src={logo} alt='logos'/>
            <div className='links'>
                <span className='icon'>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </span>
                <ul>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
// 54,950