import React from 'react'
import './style.css'

export default function Home() {
    return (
        <div className="home" id='home'>
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Anis Bazzine</h2>
                    <h4 className="home-info">Mobile App Developer</h4>
                    <p className="home-desc">
                        Iam a professional <span>Mobile App developer </span> use React native to creating modern Mobile app. Let us work together.Thank you. 
                    </p>
                    <button className="home-btn">Let's Begin</button>
                </div>
            </div>
        </div> 
    )
}