import React from "react";
import "./singlePost.css";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import postImg from "../../assets/postPic.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={postImg} alt="singlePostImg" />
        <p className="singlwPostHeading">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
          <div className="singlePostEdt">
            <i>
              <AiOutlineCreditCard className="singlePostIcon1" />
            </i>
            <i>
              <RiDeleteBin6Line className="singlePostIcon2" />
            </i>
          </div>
        </p>
        <div className="singlePostInfo">
          <p className="singlePostAuth">
            Author:Teressa Jennifer
          </p>
          <p className="SinglepostDate">
             <b>22 Mar 2023</b>
          </p>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem reprehenderit repellendus amet voluptate. 
            Deleniti nesciunt itaque magnam perferendis blanditiis quis iusto accusantium voluptate cupiditate quaerat, 
            odit dolorum totam vitae! Quasi labore, voluptatibus quos sit cupiditate libero,
             distinctio dolore, delectus aliquam similique eveniet! Aperiam at, cumque eaque dolor libero molestiae.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem reprehenderit repellendus amet voluptate. 
            Deleniti nesciunt itaque magnam perferendis blanditiis quis iusto accusantium voluptate cupiditate quaerat,
            <br/> 
            odit dolorum totam vitae! Quasi labore, voluptatibus quos sit cupiditate libero,
             distinctio dolore, delectus aliquam similique eveniet! Aperiam at, cumque eaque dolor libero molestiae.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem reprehenderit repellendus amet voluptate. 
            Deleniti nesciunt itaque magnam perferendis blanditiis quis iusto accusantium voluptate cupiditate quaerat, 
            odit dolorum totam vitae! Quasi labore, voluptatibus quos sit cupiditate libero,
             distinctio dolore, delectus aliquam similique eveniet! Aperiam at, cumque eaque dolor libero molestiae.
          </p>
      </div>
    </div>
  );
}

export default SinglePost;
