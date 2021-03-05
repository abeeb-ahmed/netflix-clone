import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const history = useHistory();
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
            onClick={() => history.push("/")}
            src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
            alt="netflix"
          />
        </div>
        <div className="nav__avatar">
          <img
            onClick={() => history.push("/profile")}
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
