import React from 'react'
import './About.css'
import Sidebar from '../Sidebar/Sidebar'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
        <p className='aboutTitle'>ABOUT US.</p>
        <p className='aboutInfo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur expedita non nesciunt
             corrupti earum necessitatibus ab vel, praesentium repellendus cum doloribus excepturi, ipsam reiciendis 
             amet officiis labore eius consequatur odit debitis quas placeat nulla? Facere, laborum reprehenderit ea 
             ipsam, nisi placeat mollitia, inventore voluptates dolore perferendis ab nam quisquam.
             Odit cupiditate commodi sunt qui praesentium ad at? Quo, eos porro non sequi doloremque veniam 
             fugiat neque enim ratione dignissimos.
             <br/>
             <br/>
             Ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur expedita non nesciunt
             corrupti earum necessitatibus ab vel, praesentium repellendus cum doloribus excepturi, ipsam reiciendis 
             amet officiis labore eius consequatur odit debitis quas placeat nulla? Facere, laborum reprehenderit ea 
             ipsam, nisi placeat mollitia, inventore voluptates dolore perferendis ab nam quisquam.
             Odit cupiditate commodi sunt qui praesentium ad at? Quo, eos porro non sequi doloremque veniam 
             fugiat neque enim ratione dignissimos.</p>
        </div>
        <Sidebar/>
    </div>
  )
}

export default About