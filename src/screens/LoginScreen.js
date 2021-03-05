import React, { useState } from "react";

import "./LoginScreen.css";
import SignUpScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__top">
        {!signIn && (
          <>
            <img
              className="loginScreen__img"
              src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
              alt="netflix"
            />
            <button
              onClick={() => setSignIn(true)}
              className="loginScreen__signIn"
            >
              Sign In
            </button>
          </>
        )}
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__contents">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, tv programmes and more.</h1>
            <h2>Watch anywhere, cancel at anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__inputContent">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="loginScreen__input"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__inputButton"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
