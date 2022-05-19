import React, { useEffect, useState } from "react";
import Home from "./page/home";
import Navigationbar from "./components/navigationbar";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./page/blogs";
import Footer from "./components/footer";
import TextUtils from "./page/textUtils";
import Todos from "./page/todos";
import Login from "./components/login";
import AppState from "./context/AppState";
import Register from "./components/register";
import PhoneLogin from "./components/phoneLogin";
import { GiChargedArrow } from "react-icons/gi";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", scrollUpTop);
  }, []);

  function scrollUpTop() {
    const scrollUp = document.querySelector(".up_btn");
    const scrollY = window.pageYOffset;
    if (scrollY >= 560) {
      scrollUp.classList.add("show_up_btn");
    } else {
      scrollUp.classList.remove("show_up_btn");
    }
  }

  return (
    <>
      <Helmet>
        <title>Web Tools | Home</title>
      </Helmet>
      <AppState>
        <Router>
          <Navigationbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/textutils" element={<TextUtils />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/phlogin" element={<PhoneLogin />} />
            </Routes>
          </div>

          <Footer />
          <a href="#" className="button up_btn">
            <GiChargedArrow
              size={25}
              style={{ transform: "rotate(-135deg)" }}
              color="var(--link-color)"
            />
          </a>
        </Router>
      </AppState>
    </>
  );
}

export default App;
