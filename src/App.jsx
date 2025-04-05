import React from "react";
import "./App.css";
import videoBg from "./assets/bgvideo.mp4"; // videonun yolunu düz göstər

function App() {
  return (
    <div className="app">
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="content">
        <h1>Xoş Gəldin</h1>
        <p>Cavel Records</p>
      </div>
    </div>
  );
}

export default App;
