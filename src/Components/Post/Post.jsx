import React from "react";
import postImg from "../../assets/postPic.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="postimg" src={postImg} alt="postimage" />
      <div className="postInfo">
        <span className="postTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>

        <span className="postDate"> 39min Ago</span>

        <hr />
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          suscipit aperiam? Eum, perspiciatis? Voluptatibus exercitationem,
          eaque illo dolorum eos quia a corporis fuga reprehenderit numquam vel
          inventore repudiandae blanditiis accusamus eveniet maiores harum nihil
          mollitia quaerat quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          suscipit aperiam? Eum, perspiciatis? Voluptatibus exercitationem,
          eaque illo dolorum eos quia a corporis fuga reprehenderit numquam vel
          inventore repudiandae blanditiis accusamus eveniet maiores harum nihil
          mollitia quaerat quam. 
        </p>
        <button type="button" className="posttxtButton">
          READ MORE
          <AiOutlineArrowRight className="arrowText" />
        </button>
      </div>
    </div>
  );
};

export default Post;
