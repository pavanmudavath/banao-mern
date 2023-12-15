import React from 'react';
import './SignIn.css';
import signUpLogo from "../assets/signUp/atg_illustration (1).png";
import vectorLogo from "../assets/signUp/Vector.png";
import eyeIcon from "../assets/signUp/eye.svg";
import facebookLogo from "../assets/signUp/f_logo_RGB-Blue_1024.png";
import googleLogo from "../assets/signUp/search.png";
import { Link } from 'react-router-dom';

function SignIn(){
    return (
        <div className="sign-in-card1-outside">
        <div className="sign-in-card1">
            <div className="top-Of-SignIn1">
                <h1 className="text-style1">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
            </div>
            <h1 className="create-account-signIn1" >Sign In</h1>
            <div className="text-signin1">
                <span className="tect-signin-normal1">Don’t have an account yet?</span>
                <span className="tect-signin-signin1">Create new for free!</span>
            </div>
            <img src={signUpLogo} alt="SignUp Logo" className="signUp-logo1" />
            <Link to="/">
            <img  src={vectorLogo} alt="vector Logo" className="vector-logo1"/>
            </Link>
            <div className='inputbox2-signUp1'>
            <input type="text" placeholder="Email" className="inputbox2-Email1"/>
            </div>
            <div className='inputbox3-signUp1'>
            <input type="text" placeholder="Password" className="inputbox3-Password1"/>
            <img src={eyeIcon} alt="Eye Icon" className="eye-icon1" />
            </div>
            <div className="create-account-button1">
                <h1 className="create-account-button-text1">Sign In</h1>
            </div>
          <div className="facebook-login1"></div>
          <img src={facebookLogo} alt="faceBook Icon" className="facebook-logo1" />
          <h1 className='facebook-signUpmsg1'>Sign up with Facebook</h1>
          <div className="google-login1"></div>
          <img src={googleLogo} alt="googleIcon" className="google-logo1" />
          <h1 className='google-signUpmsg1'>Sign up with Google</h1>
          <div className='forgot-possword1'></div>
          <h1 className='forgot-possword-msg1'>Forgot Password?</h1>
        </div>
        </div>
    );
}
export default SignIn;