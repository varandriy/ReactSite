import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div>
      <div className={s.item}>
        <div>
          <img
            src="https://www.askideas.com/media/36/Funny-Weird-Face-Old-Man-Laughing-Image-For-Facebook.jpg"
            alt=""
          ></img>
          <span className={s.posts}>{props.post}</span>
        </div>

        <div>{props.like}</div>
      </div>
    </div>
  );
};

export default Post;
