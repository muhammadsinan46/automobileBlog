import React from 'react'
import './Write.css'
import postImg from "../../assets/postPic.jpg";
const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src={postImg} alt="postimg" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-sharp fa-solid fa-plus"></i>

                </label>
                <input  type='file' id='fileInput' style={{display:"none"}}/>
                <input  type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Write Here.....' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>

        </form>
        </div>
  )
}

export default Write