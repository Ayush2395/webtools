import React from "react";
import Home from "./page/home";
import Navigationbar from "./components/navigationbar";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./page/blogs";
import Footer from "./components/footer";
import TextUtils from "./page/textUtils";

function App() {
  return (
    <>
      <Helmet>
        <title>Web Tools | Home</title>
      </Helmet>
      <Router>
        <Navigationbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/textutils" element={<TextUtils />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
