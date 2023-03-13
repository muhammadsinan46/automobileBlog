import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
// import Sidebar from "../Sidebar/Sidebar";

const Posts = () => {
  return (
    
    <div className="Mainpost">
       <span className="postHead" >LATEST</span>
     <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    
    </div>
  );
};

export default Posts;
