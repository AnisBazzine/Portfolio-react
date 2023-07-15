import React from 'react'
import './style.css'
import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter,BiLogoYoutube} from "react-icons/bi"
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <ul className='ul-list menu-links'>
                    <p className='title-list'>Menu Links</p>
                    <span className='under-line'></span>
                    <li className='items'><a className='links' href='#home'> Home</a></li>
                    <li className='items'><a className='links' href='#about'> About</a></li>                    
                    <li className='items'><a className='links' href='#menu'> Menu</a></li>
                    <li className='items'><a className='links' href='#service'> Services</a></li>
                    <li className='items'><a className='links' href='#contact'> Contact</a></li>
                </ul>
                <ul className='ul-list our-services'>
                    <p className='title-list'>Our Service</p>
                    <span className='under-line'></span>
                    <li className='items'>Web Design</li>
                    <li className='items'>Web Development</li>                    
                    <li className='items'>Marketing</li>
                    <li className='items'>Product Management</li>
                    <li className='items'>Graphic Design</li>
                </ul>
                <ul className='ul-list information'>
                    <p className='title-list'>Information</p>
                    <span className='under-line'></span>
                    <li className='items'>About Us</li>
                    <li className='items'>Delivery Information</li>                    
                    <li className='items'>Privacy Policy</li>
                    <li className='items'>Terms & Conditions</li>
                </ul>
                <ul className='ul-list contact-us'>
                    <p className='title-list'>Contact Us</p>
                    <span className='under-line'></span>
                    <div className='social-list'>
                        <a href='https://www.facebook.com/anisbazzine' target='_blank' rel="noopener noreferrer"><BiLogoFacebook className='social-logo'/></a> 
                        <a href='https://www.instagram.com/anis.bazzine' target='_blank' rel="noopener noreferrer" ><BiLogoInstagram className='social-logo'/></a>      
                        <a href='https://www.Twitter.com/anisbazzine' target='_blank' rel="noopener noreferrer" ><BiLogoTwitter className='social-logo'/></a> 
                        <a href='https://www.youtube.com/@anisbazzine1408' target='_blank' rel="noopener noreferrer" ><BiLogoYoutube className='social-logo'/></a>
                    </div>
                </ul>

            </div>
        </div>
    )
}
