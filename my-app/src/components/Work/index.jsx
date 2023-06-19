import React ,{useState, useEffect} from 'react'
import axios from 'axios'
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
                <i className={workPart.icon_name}></i>
                <h4 className="part-title">{workPart.title}</h4>
                <hr className="line"/>
                <p className="part-desc">{workPart.body}</p>
            </div>
        )
    })
    return (
        <div className='work' >
            <div className='container'>
                <h2 className='work-title'><span>My</span> Work</h2>
                {listWork}
            </div>
        </div>
    )
}
