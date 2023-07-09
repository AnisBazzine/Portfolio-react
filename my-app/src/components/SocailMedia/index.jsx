import React , {useState,useEffect} from 'react'
import axios from 'axios'
import { SocialIcon } from 'react-social-icons'
import './style.css'
export default function SocailMedia() {
    const [social, setSocial] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setSocial(res.data.social)})
        .catch(err =>{console.log(err)})
    },[])
    const socialList = social.map(socialItem=>{
        return(
            <div className="social" style={{backgroundColor:`${socialItem.color}`}} key={socialItem.id}>
                <SocialIcon className='icon' url={socialItem.link} target='_blank' />
                <p>
                    <span className="info-title">{socialItem.title}</span>
                    <span className="info-body" url={socialItem.link} target='_blank'>{socialItem.body}</span>
                </p>
            </div>
        )
    })
    return (
        <div className="social-media" id='social-media'>
            {socialList}
        </div>   
    )
}
