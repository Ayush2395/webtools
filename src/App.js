import React from "react";
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

function App() {
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
            </Routes>
          </div>
          <Footer />
        </Router>
      </AppState>
    </>
  );
}

export default App;
