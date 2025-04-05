import "./App.css";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import videoBg from "./assets/bgvideo.mp4"; // videonun yolunu düz göstər

function App() {
  return (
    <main className="cavel-main flex flex-col justify-center items-center h-full w-full bg-red-400">
      {/* <Navbar />
      <Links /> */}
      <video autoPlay loop muted className="video-bg w-full h-full">
        <source src={videoBg} type="video/mp4" />
      </video>
    </main>
  );
}

export default App;
