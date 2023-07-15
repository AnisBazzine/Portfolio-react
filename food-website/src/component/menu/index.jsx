import React from 'react'
import {MdOutlineShoppingCart} from "react-icons/md";
import './style.css'
import food1 from '../img/food1.png'
import food2 from '../img/food2.png'
import food3 from '../img/food3.png'

export default function Menu() {
    return (
        <div className='menu' id='menu'>
            <div className='text-head'>
                <p className='title'>Food Menu</p>
                <p className='heading'>Fresh taste and great price</p>
            </div>
            <div className='foods-img'>
                <BoxImg foodImg={food1} name='Chicken Burger' desc='Tasty Food' price='11.00$'/>
                <BoxImg foodImg={food2} name='Special Beef Burger' desc='Tasty Food' price='11.00$'/>
                <BoxImg foodImg={food3} name='Chicken Fry Pack' desc='Tasty Food' price='11.00$'/>
            </div>
        </div>
    )
}
const BoxImg=(props)=>{
    return(
        <div className='box'>
            <div className='box-img'>
                <img src={props.foodImg} alt='Food'></img>
            </div>
            <p className='title'>{props.name}</p>
            <p className='desc'>{props.desc}</p>
            <p className='price'>{props.price}</p>
            <MdOutlineShoppingCart className='icon'/>
        </div>
    )
}