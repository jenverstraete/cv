import React from "../../../node_modules/react";
import me from "../../images/me.jpg";

const ProfilePic = () => (
  <div className="col-12">
    <div className="row">
      <img src={me} className="centered roundedImage" alt="photo_of_me" />
    </div>
  </div>
);

export default ProfilePic;
