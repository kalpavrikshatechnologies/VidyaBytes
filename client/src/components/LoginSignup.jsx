import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import pass_icon from "./Assets/password.png";
import m_icon from "./Assets/mobile.png";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Please Enter Your Name" />
            </div>
            <div className="input">
              <img src={m_icon} alt="" />
              <input type="Mobile" placeholder="Enter Mobile No." />
            </div>
          </>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="Email" placeholder="Enter Your Email" />
        </div>

        <div className="input">
          <img src={pass_icon} alt="" />
          <input type="password" placeholder="Enter a Password" />
        </div>
      </div>
        {action === "Sign Up" ? <div></div> :   <div className="forgot-password">
        Lost Password <span>Click Here</span>
      </div>}
    
      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit grey" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit grey" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
