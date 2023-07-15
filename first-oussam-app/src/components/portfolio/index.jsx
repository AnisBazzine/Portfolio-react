import React from 'react'
import './style.css'
import portfolio1 from '../images/portfolio-1.jpg'
import portfolio2 from '../images/portfolio-2.jpg'
import portfolio3 from '../images/portfolio-3.jpg'
export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='Portfolio-container'>
                <header className='titles'>
                    <h1 className='title'>Portfolio</h1>
                    <p className='heading'>If you do it right, it will last forever</p>
                </header>
                <section className='box-project'>
                    <div className='box-container'>
                        <div className='box'>
                            <img className='img img1'src={portfolio1} alt='' ></img>
                            <h3 className='title-box'>Project Here</h3>
                            <p className='desc-box'>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                        <div className='box'>
                            <img className='img img2' src={portfolio2} alt=''></img>
                            <h3 className='title-box'>Project Here</h3>
                            <p className='desc-box'>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                        <div className='box'>
                            <img className='img img3' src={portfolio3} alt=''></img>
                            <h3 className='title-box'>Project Here</h3>
                            <p className='desc-box'>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  )
}
