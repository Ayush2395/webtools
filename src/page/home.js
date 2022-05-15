import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/91194-development.json";
import Stroke from "../assets/img/stroke.svg";
import { IoBookSharp } from "react-icons/io5";
import { RiTextWrap, RiTodoLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

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
      <div className="section home">
        <div className="home_section grid">
          <div className="col" style={{ position: "relative", top: "8vh" }}>
            <p>Hi</p>
            <p>Welcome to...</p>
            <h1>Web Tools</h1>
            <div className="grid btn">
              <img src={Stroke} alt="stroke" className="stroke" />
              <img src={Stroke} alt="stroke" className="stroke" />
              <a href="#featured_tools" className="button">
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
        <div className="featured_tools" id="featured_tools">
          <div className="main_title">
            <h1>Featured Tools</h1>
          </div>
          <div className="grid tools_link">
            <Fade left>
              <div className="blog cards">
                <div className="icons">
                  <IoBookSharp color="var(--purple-color)" size={20} />
                </div>
                <h1 className="title">Blogs</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link to="/blogs" className="button">
                  Visit
                </Link>
              </div>
            </Fade>
            <Fade>
              <div className="text_utility cards">
                <div className="icons">
                  <RiTextWrap color="var(--purple-color)" size={20} />
                </div>
                <h1 className="title">Text Utility</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link to="/textutils" className="button">
                  Visit
                </Link>
              </div>
            </Fade>
            <Fade right>
              <div className="todos cards">
                <div className="icons">
                  <RiTodoLine color="var(--purple-color)" size={20} />
                </div>
                <h1 className="title">Todos</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link to="/todos" className="button">
                  Visit
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
