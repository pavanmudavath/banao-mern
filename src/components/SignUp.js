import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import signUpLogo from "../assets/signUp/atg_illustration (1).png";
import vectorLogo from "../assets/signUp/Vector.png";
import eyeIcon from "../assets/signUp/eye.svg";
import facebookLogo from "../assets/signUp/f_logo_RGB-Blue_1024.png";
import googleLogo from "../assets/signUp/search.png";

function SignUp(){
    return (
        <div className="sign-up-card-output">
        <div className="sign-up-card">
            <div className="top-Of-SignUp">
                <h1 className="text-style-signup">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
            </div>
            <h1 className="create-account-signIn" >Create Account</h1>
            <div className="text-signin">
                <span className="tect-signin-normal">Already have an account?</span>
                <Link to="/signin" className="tect-signin-signin"> Sign In</Link>
            </div>
            <img src={signUpLogo} alt="SignUp Logo" className="signUp-logo" />
            <img src={vectorLogo} alt="vector Logo" className="vector-logo"/>
            <div className='inputbox1-signUp'>
              <input type="text" placeholder="First Name" className="inputbox1-firstName"/>
              <input type="text" placeholder="Last Name" className="inputbox1-lastName"/>
              <div className='middle-line'></div>
             
            </div>
            <div className='inputbox2-signUp'>
            <input type="text" placeholder="Email" className="inputbox2-Email"/>
            </div>
            <div className='inputbox3-signUp'>
            <input type="text" placeholder="Password" className="inputbox3-Password"/>
            <img src={eyeIcon} alt="Eye Icon" className="eye-icon" />
            </div>
            <div className='inputbox4-signUp'>
            <input type="text" placeholder="Confirm Password" className="inputbox3-Confirm-Password"/>
            </div>
            <div className="create-account-button">
                <h1 className="create-account-button-text">Create Account</h1>
            </div>
            <h1 className='terms-condition'>By signing up, you agree to our Terms & conditions, Privacy policy</h1>
          <div className="facebook-login"></div>
          <img src={facebookLogo} alt="faceBook Icon" className="facebook-logo" />
          <h1 className='facebook-signUpmsg'>Sign up with Facebook</h1>
          <div className="google-login"></div>
          <img src={googleLogo} alt="googleIcon" className="google-logo" />
          <h1 className='google-signUpmsg'>Sign up with Google</h1>
        </div>
        </div>
        
    );
}
export default SignUp;