import React from 'react'
import './style.css'
import aboutImg from '../img/about.png'
export default function About() {
    return (
        <div className='about' id='about'>
            <div className='img-cont'>
                <img src={aboutImg} alt='aboutImg' ></img>
            </div>
            <div className='about-text'>
                <p className='title'>About us</p>
                <h2 className='heading'>We speak the good <br/>food language</h2>
                <p className='text'>There are many variations passages of lorem Ipsum available, but the 
                majority have suffered alteration in form, by injected humour
                randomised words which don't look even slightly believable.</p>
                <a className='btn' href='#d'>Learn More</a>
            </div>
        </div>
    )
}
