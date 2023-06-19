import React from 'react'
import Home from '../Home'
import Work from '../Work'
import Portfolio from '../Portfolio'
import Profile from '../Profile'
import About from '../About'
import SocailMedia from '../SocailMedia'


export default function index() {
    return (
        <div>
            <Home/>
            <Work />
            <Portfolio />
            <Profile />
            <About/>
            <SocailMedia />
        </div>
    )
}
