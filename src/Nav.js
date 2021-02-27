import React, { useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      document.querySelector(".nav").classList.add("nav__dark");
    } else {
      document.querySelector(".nav").classList.remove("nav__dark");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className="nav">
      <div className="nav__contents">
        <div className="nav__icon">
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
            alt="netflix"
          />
        </div>
        <div className="nav__avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
