import React from 'react'
import './style.css'
import {AiFillYoutube} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
export default function Contact() {
    return (
        <div className='contact'>
            <div className='container'>
                <h2 className='special-heading'>Contact</h2>
                <p>We are born to create</p>  
                <div className='info'>
                    <h3 className='title'>Feel free to drop us a line at</h3>
                    <a className='link' href='mailto:leonagency@mail.com'>leonagency@mail.com</a>
                    <div className='social'>
                        <p>Find Us On Social Networks</p>
                        <AiFillYoutube className='icon'/>
                        <FaFacebookF className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                    </div>
                </div>
            </div>       
        </div>
    )
}
