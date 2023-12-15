import React from "react";
import './Home.css';
import Homeimage from "../assets/home/Rectangle 3 (5).png";
import HomearrowDown from"../assets/home/baseline-arrow_drop_down-24px.png";
import HomeGroupIcon from "../assets/home/baseline-group_add-24px.png";
import OutLineLocationLogo from "../assets/home/outline-location_on-24px 2.png";
import baseLineEdit from "../assets/home/baseline-edit-24px.png";
function Home(){
    return(
        <div>
    <img src={Homeimage} alt="Home Main pic" className="home-image"/>
    <h1 className="allpost">All Posts(32)</h1>
    <h1 className="article">Article</h1>
    <h1 className="event">Event</h1>
    <h1 className="education">Education</h1>
    <h1 className="job">Job</h1>
    <div className="write-post-box">
        <h1 className="write-post-text">Write a Post</h1>
        </div> 
    <img src={HomearrowDown} alt="Home arrow" className="home-arrow-down"/>
    <div className="join-group-box">
    <img src={HomeGroupIcon} alt="Home GroupIcon" className="home-group-icon"/>
        <h1 className="join-group-text">Join Group</h1> 
        
    </div>
    <div className="Homeline-down1"></div>
    <div className="Homeline-down2"></div>
    </div>
    )
}
export default Home;