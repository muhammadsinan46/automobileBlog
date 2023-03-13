import React from 'react'
import './settings.css'
import heroPic from '../../assets/heropic.jpg'
import Sidebar from '../../Components/Sidebar/Sidebar'


const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>    
            <div className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img className='settingsPP' src={heroPic} alt="heroPic" />
                    <label htmlFor='fileInput'>
                    <i className="settingsPPIcon fa-solid fa-user-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}  />
                </div >
                
                <label>Username :</label>
                <input type="name" placeholder='Enter your name' />
                <label>Email :</label>
                <input type="email" placeholder='Enter email id' />
                <label>Password :</label>
                <input type="password" placeholder='Enter password' />
                <button className='settingsSubmit'>Update</button>
                
                
            </div>
        </div>
        <Sidebar/>
        </div>
  )
}

export default Settings