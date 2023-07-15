import React from 'react'
import './style.css'
import order from '../img/s1.png'
import shipping from '../img/s2.png'
import delivered from '../img/s3.png'

export default function Service() {
    return (
        <div id='service' className='service'>
            <section className='text-head'>
                <p className='title'>Service</p>
                <h2 className='heading'>We provide best quality food</h2>
            </section>
            <section className='services-list'>
                <ServiceItem 
                    image={order}
                    title='Order'
                    desc={`There are many variations passages of lorem Ipsum available,
                    but the majority have suffered alteration in form, by injected humour.`}               
                />
                <ServiceItem 
                    image={shipping}
                    title='Shipping'
                    desc={`There are many variations passages of lorem Ipsum available, 
                    but the majority have suffered alteration in form, by injected humour.`} 
                />
                <ServiceItem 
                    image={delivered}
                    title='Delivered'
                    desc={`There are many variations passages of lorem Ipsum available, 
                    but the majority have suffered alteration in form, by injected humour.`} 
                />
            </section>
        </div>
    )
}
const ServiceItem=(props)=>{
    return(
        <>
            <section className='item'>
                <div className='img-box'>
                    <img className='img' src={props.image} alt='Ser'/>
                    <h3 className='title-img'>{props.title}</h3>
                </div>
                <p className='desc'>{props.desc}</p>
            </section>
        </>
    )
}