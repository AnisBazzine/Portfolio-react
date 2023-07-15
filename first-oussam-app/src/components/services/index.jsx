import React from 'react'
import {BsFillPaletteFill} from 'react-icons/bs'
import {PiSketchLogo} from 'react-icons/pi';
import {SiMaterialdesignicons} from 'react-icons/si';
import {FaPencilRuler} from 'react-icons/fa';
import './style.css'
export default function Services() {
    return (
        <div className='services'>  
            <div className='services-container'>
                <div className='title'>
                    <h1 className='services-title'>Services</h1>
                    <p className='heading-title'>Don't be busy, be productive</p>
                </div>
                <div className='service-items'>
                    <div className='item'>
                        <BsFillPaletteFill className='icon'/>
                        <h1>Graphic Design</h1>
                        <p className='item-desc'>Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration. </p>
                    </div>    
                    <div className='item'>
                        <PiSketchLogo className='icon'/>
                        <h1>UI & UX</h1>
                        <p className='item-desc'>Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction. </p>
                    </div>    
                    <div className='item'>
                        <SiMaterialdesignicons className='icon'/>
                        <h1>Web Design</h1>
                        <p className='item-desc'>Web design encompasses many different skills and disciplines in the production and maintenance of websites</p>
                    </div>    
                    <div className='item'>
                        <FaPencilRuler className='icon'/>
                        <h1>Web Development</h1>
                        <p className='item-desc'>Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. </p>
                    </div>    
                    <div className='image'>
                        <div className='image-cont'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
