import React from "react";
import "./App.css";
import videoBg from "./assets/bgvideo.mp4"; // videonun yolunu düz göstər
// import { Links } from "react-router-dom";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="content flex flex-col gap-5">
        <Navbar />
        <Links />
      </div>
    </div>
  );
}

export default App;
