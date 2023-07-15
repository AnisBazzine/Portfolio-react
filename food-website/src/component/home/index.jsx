import React from 'react'
import './style.css'
import homeImg from '../img/home.png'
export default function Home() {
    return (
        <div className='home' id='home'>
            <div className='home-cont'>
                <h1 className='big-text'>Full WebSite</h1>
                <h2 className='normal-text'>Foods The <br/>most precious things</h2>
                <a href='#' className='btn'>Today's Menu</a>
            </div>
            <div className='img-cont'>
                <img src={homeImg} alt='MyImg'></img>
            </div>
        </div>
    )
}
