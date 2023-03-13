import React from 'react';
import './Header.css'
import headerImg from '../../assets/bannerimg1.jpg'
import {AiTwotoneCalendar,AiOutlineArrowRight} from 'react-icons/ai'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className='headerTitlesm'>AUTOMOBILE</span>
            <span className='headerTitlelg'>BLOG</span>
            
        </div>
        <span className='headerTitle2'>TOP STORY</span>
        <img className='headerImg' src={headerImg} alt="headerimg" />
        <p className='TopHeading' >Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <span className='postDate'>
        <AiTwotoneCalendar/> 22 Mar 2023</span>
        <p className='toptext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime libero asperiores ipsam nesciunt corporis, tenetur tempora nulla veniam error, a provident sequi illum eum explicabo. Impedit iste amet aspernatur temporibus, recusandae unde consectetur, culpa non quaerat vero, obcaecati dolorum expedita officia ipsa ipsam ad magnam delectus. Incidunt, in laudantium?</p>
        <button type="button" className="toptxtButton">READ MORE<AiOutlineArrowRight className='arrowText'/></button>
    </div>
  )
}

export default Header