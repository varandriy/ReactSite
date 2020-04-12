import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img
          src="https://www.logolynx.com/images/logolynx/02/02ba1e458187275b57a780b629550c9f.png"
          height="100px"
          width="200px"
          alt=""
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        {props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
