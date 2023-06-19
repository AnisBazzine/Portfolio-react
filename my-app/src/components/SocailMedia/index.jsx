import React , {useState,useEffect} from 'react'
import axios from 'axios'

export default function SocailMedia() {
    const [social, setSocial] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setSocial(res.data.social)})
        .catch(err =>{console.log(err)})
    },[])
    const socialList = social.map(socialItem=>{
        return(
            <div className="social face" key={socialItem.id}>
                <i className={socialItem.icon}></i>
                <p>
                    <span className="info1">{socialItem.title}</span>
                    <span className="info2">{socialItem.body}</span>
                </p>
            </div>
        )
    })
    return (
        <div className="social-media">
            {socialList}
        </div>
        
    )
}
