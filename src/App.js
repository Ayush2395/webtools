import React from "react";
import Home from "./page/home";
import Navigationbar from "./components/navigationbar";
import { Helmet } from "react-helmet";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Web Tools | Home</title>
      </Helmet>
      <Navigationbar />
      <div className="main">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
