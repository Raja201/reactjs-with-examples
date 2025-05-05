import React from "react";
import "./ProfileCard.css"; // if using external CSS
import profileImg from "../../assets/profile.svg";

const ProfileCard = () => {
  return (
    <div className="card">
      <img src={profileImg} alt="Profile" className="avatar" />
      <h2>React Components</h2>
      <p>Basics1</p>
    </div>
  );
};

export default ProfileCard;
