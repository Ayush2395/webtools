import React from "react";
import Home from "./page/home";
import Navigationbar from "./components/navigationbar";
import { Helmet } from "react-helmet";

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
    </>
  );
}

export default App;
