import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'
export default function Work() {
    const [work, setWork] = useState([])
    useEffect (()=>{
        axios.get('js/data.json')
        .then(res =>setWork(res.data.works))
        .catch(err => console.log(err))
    },[])
    const listWork= work.map(workPart =>{
        return(
            <div className='part-first' key={workPart.id}>
                <img scr={workPart.icon_name} alt=''/>
                <h4 className="part-title">{workPart.title}</h4>
                <hr className="line"/>
                <p className="part-desc">{workPart.body}</p>
            </div>
        )
    })
    return (
        <div className='work' id='work'>
            <h2 className='work-title'><span>My</span> Services</h2>
            <div className='container-work'>
                {listWork}
            </div>
        </div>
    )
}
