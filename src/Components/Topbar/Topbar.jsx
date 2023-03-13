import React from 'react';
import './Topbar.css';
import {MdOutlineFacebook} from 'react-icons/md'
import{AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai'
import{ImPinterest} from 'react-icons/im'
import heroPic from '../../assets/heropic.jpg'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Topbar = () => {
    const user = false
  return (
    <div className='top'>
        <div className='topLeft'>
            <MdOutlineFacebook className='topIcon '/>
            <AiFillTwitterCircle className='topIcon'/>
            <ImPinterest className='topIcon'/>
            <AiFillInstagram className='topIcon'/>
       
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                   <Link  className='link' to="/" >HOME</Link> 
                    </li>
                <li className='topListItem'>
                    <Link  className='link' to="/gallery" >GALLERY</Link>
                </li>
                <li className='topListItem'>
                    <Link  className='link' to="/stories" >STORIES</Link>
                </li>
                <li className='topListItem'>
                    <Link  className='link' to="/write" >WRITE</Link>
                    </li>
                <li className='topListItem' >
                <Link  className='link' to="/about" >ABOUT US</Link>
                    </li>

            </ul>
        </div>
        <div className='topRight'>
        <BsSearch className='topSearchIcon'/>
        {
            user ? (<img  className='topPic' src={heroPic}alt='profile'/>) :
            (
            <ul className='topList'>
                <li className='topListItem'>
                <Link  className='link' to="/login" >LOGIN</Link>
                </li>
                
                <li className='topListItem'>
                <Link  className='link' to="/signup" >SIGNUP</Link>
                </li>
              
            
            </ul>
          )
        }
            
          
        </div>
    </div>
  )
}

export default Topbar