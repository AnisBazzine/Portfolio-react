import React from 'react'
import './style.css'
import { PiMagicWandFill } from "react-icons/pi";
import { BsGem } from "react-icons/bs";
import {BiWorld} from "react-icons/bi";

export default function Features() {
  return (
        <div className='features'>
            <div className='features-container'>
            <div className='feet'>
                <PiMagicWandFill className='icon'/>
                <h3 className='feet-title'>Tell Us Your Idea</h3>
                <p className='feet-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                </p>
            </div>
            <div className='feet'>
                <BsGem className='icon'/>
                <h3 className='feet-title'>We Will Do All The Work</h3>
                <p className='feet-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                </p>
            </div>
            <div className='feet'>
                <BiWorld className='icon'/>
                <h3 className='feet-title'>Your Product is Worldwide</h3>
                <p className='feet-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                </p>
            </div>
        </div>
    </div>
  )
}
