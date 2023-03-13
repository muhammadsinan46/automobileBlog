import React from 'react'
import './gallery.css'
import galleryimge1 from "../../assets/cargallery/galleryimg1.jpg"
import galleryimge2 from "../../assets/cargallery/galleryimg2.jpg"
import galleryimge3 from "../../assets/cargallery/galleryimg3.jpg"
import galleryimge4 from "../../assets/cargallery/galleryimg4.jpg"
import galleryimge5 from "../../assets/cargallery/galleryimg5.jpg"
import galleryimge6 from "../../assets/cargallery/galleryimg6.jpg"
import galleryimge7 from "../../assets/cargallery/galleryimg7.jpg"

const Gallery = () => {
    const galleryPics =[
        {
            id:1,
            pics:galleryimge1,
            title:"Lorem Ipsum is simply dummy text ",
            time:"just now"
        },
        {
            id:2,
            pics:galleryimge2,
            title:"Lorem Ipsum is simply dummy text ",
            time:"1 hour ago"

        },

        {
            id:3,
            pics:galleryimge3,
            title:"Lorem Ipsum is simply dummy text ",
            time:"1 days ago"
        },
        {
            id:4,
            pics:galleryimge4,
            title:"Lorem Ipsum is simply dummy text ",
             time:"5 days ago"

        },
        {
            id:5,
            pics:galleryimge5,
            title:"Lorem Ipsum is simply dummy text ",
            time:"2 days ago"

        },
        {
            id:6,
            pics:galleryimge6,
            title:"Lorem Ipsum is simply dummy text ",
            time:"3 days ago"
        },
        {
            id:7,
            pics:galleryimge7,
            title:"Lorem Ipsum is simply dummy text ",
            time:"30 min ago"
        },
    ]
  return (
    <div className='gallery'>
        <p className='galleryTitle'>GALLERY</p>
        
        {galleryPics.map(({id,pics,title,time})=>(
                <div key={id} className='galleryWrapper'>
                    <img className='galleryImg' src={pics} alt="galeryimg"/>
                    <p  className='galleryImgTitle'>{title}</p>
                    <p className='galleryInfo'>{time}</p>
                </div>
            ))}

            </div>    
            
    

  )
}

export default Gallery