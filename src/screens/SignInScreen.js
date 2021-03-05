import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase.js";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <form>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={handleSignIn}>Sign In</button>
        <h4>
          <span className="gray">New to Netflix? </span>
          <span className="white" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
