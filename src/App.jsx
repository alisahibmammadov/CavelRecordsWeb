import React from "react";
import "./App.css";
// import videoBg from "./assets/bgvideo.mp4"; 
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Logo from './assets/Logo.png'

function App() {
  return (
    <div className="app">
      {/* <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video> */}
      <img src={Logo} alt="" className="video-bg"/>

      <div className="content flex flex-col gap-5 md:gap-8">
        <Navbar />
        <Links />
      </div>
    </div>
  );
}

export default App;
