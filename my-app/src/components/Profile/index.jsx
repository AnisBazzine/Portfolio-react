import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    const profileShow = profile.map( profileItem =>{
        return(
            <ul className="profile-list" key={profileItem.id}>
                <li className="profile-item">
                    <span>{keysProfile[1]}: </span>
                    {profileItem.Name}        
                </li>
                <li className="profile-item">
                    <span>Birthday : </span>
                    {profileItem.Birthday}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[2]}: </span>
                    {profileItem.Adress}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[3]}: </span>
                    {profileItem.Phone}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[4]}: </span>
                    {profileItem.Email}        
                </li>
                <li className="profile-item">
                    <span>{keysProfile[5]}: </span>
                    {profileItem.Website}        
                </li>
            </ul>
        )})
    const  skillsShow = skills.map( skillItem =>{
        return(
            <div className='Skills show' key={skillItem.id}>
                <div className="bar" >
                    <span className="title">{keysSkills[1]} </span>
                    <span className="perc">{skillItem.JavaScript}%</span>
                    <div className="parent">
                        <span className="sp1"></span>
                    </div>
                </div>
                <div className="bar">
                    <span className="title">{keysSkills[2]} </span>
                    <span className="perc">{skillItem.Reactnative} %</span>
                    <div className="parent">
                        <span className="sp2"></span>
                    </div>
                </div>
                <div className="bar">
                    <span className="title">{keysSkills[3]} </span>
                    <span className="perc">{skillItem.Reactjs}%</span>
                    <div className="parent">
                        <span className="sp3"></span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="profile_skills">
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