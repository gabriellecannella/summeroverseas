import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Button_AboutUs } from "./Button_AboutUs";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>UF IN CAPE TOWN</h1>
      <p>Learn more today!</p>
      <div className="hero-btns">
        <Button_AboutUs
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN MORE
        </Button_AboutUs>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;