import React from 'react'
import about from '../images/about.jpg'
import './style.css'
export default function About() {
    return (
        <div className='about'>
            <div className='container'>
                <header className='titles'>
                    <h1 className='title'>About</h1>
                    <p>Less is more work</p>
                </header>
                <section className='about-section'>
                    <div className='image-cover'>
                        <img src={about} alt=''></img>
                    </div>
                    <div className='contact'>
                        <p className='bold-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium! 
                        </p>
                        <hr className='line'/>
                        <p className='text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse, alias, sed quo officia? 
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
