import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__content">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
        <div className="profileScreen__info"></div>
      </div>
    </div>
  );
};

export default ProfileScreen;
