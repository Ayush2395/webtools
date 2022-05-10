import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/91194-development.json";
import Stroke from '../assets/img/stroke.svg'

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="home_section grid section">
        <div className="col" style={{ position: "relative", top: "8vh" }}>
          <p>Hi</p>
          <p>Welcome to...</p>
          <h1>Web Tools</h1>
          <div className="grid btn">
            <img src={Stroke} alt="stroke" className="stroke"/>
            <img src={Stroke} alt="stroke" className="stroke"/>
            <a href="#" className="button">
              Explore
            </a>
            <a href="#" className="button">
              About us
            </a>
          </div>
        </div>
        <div className="col">
          <div className="animation">
            <Lottie options={defaultOptions} height={505} width={505} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
