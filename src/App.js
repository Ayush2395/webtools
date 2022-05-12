import React from "react";
import Home from "./page/home";
import Navigationbar from "./components/navigationbar";
import { Helmet } from "react-helmet";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./page/blogs";

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
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
