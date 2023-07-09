import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
export default function Profile() {
    const [profile , setProfile] = useState([])
    const [skills, setSkills] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {
            setProfile(res.data.profile)
            setSkills(res.data.skills)
        })
        .catch(err=>console.log(err))
    },[])
    const keysProfile = profile.length > 0 ? Object.keys(profile[0]) : [];
    const keysSkills = profile.length > 0 ? Object.keys(skills[0]) : [];
    const itemBar =(title, per )=>{
        <div className='experience-item'>
            <div className='experience-info'>
                <p className='title'>{title}test</p>
                <p className='perc'>{per}</p>
            </div>
            <div className='progress-line' data-percent={per}>
                <span style={{width:{per}}} ></span>
            </div>
        </div>
    }
    const profileShow = profile.map( profileItem =>{
        return(
            <ul className="profile-list" key={profileItem.id}>
                <li className="profile-item">
                    <span>{keysProfile[1]} </span>
                    {profileItem.Name}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[2]}</span>
                    {profileItem.Birthday}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[3]}</span>
                    {profileItem.Adress}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[4]}</span>
                    {profileItem.Phone}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[5]}</span>
                    {profileItem.Email}        
                </li>
                <li className="profile-item">
                    <span className='web'>{keysProfile[6]}</span>
                    <a href='https://github.com/anisbazzine'>{profileItem.Website}</a>        
                </li>
            </ul>
        )})
        const skillsShow = skills.map( skillItem =>{
            return(
                <div className='Skills show' key={skillItem.id}>
                    <div className='experience-items'>
                        <div className='experience-item'>
                            <div className='experience-info'>
                                <p className='title'>{keysSkills[1]}</p>
                                <p className='perc'>{skillItem.JavaScript}</p>
                            </div>
                            <div className='progress-line' data-percent='50%'>
                                <span style={{width:'50%'}}></span>
                            </div>
                        </div>
                        <div className='experience-item'>
                            <div className='experience-info'>
                                <p className='title'>{keysSkills[2]}</p>
                                <p className='perc'>{skillItem.Css}</p>
                            </div>
                            <div className='progress-line' data-percent='80%'>
                                <span style={{width:"80%"}} ></span>
                            </div>
                        </div>
                        <div className='experience-item'>
                            <div className='experience-info'>
                                <p className='title'>{keysSkills[3]}</p>
                                <p className='perc'>{skillItem.Reactnative}</p>
                            </div>
                            <div className='progress-line' data-percent='70%'>
                                <span style={{width:'70%'}}></span>
                            </div>
                        </div>
                        <div className='experience-item'>
                            <div className='experience-info'>
                                <p className='title'>{keysSkills[4]}</p>
                                <p className='perc'>{skillItem.Reactjs}</p>
                            </div>
                            <div className='progress-line' data-percent='60%'>
                                <span style={{width:'60%'}}></span>
                            </div>
                        </div>
                    </div>                
                </div>
        )
    })
    return (
        <div className="profile_skills" id='profile'>
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    {profileShow}
                </div>
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {skillsShow}
                </div>
            </div>
        </div>
    )
}