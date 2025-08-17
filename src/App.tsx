import "./App.css";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Program from "./components/sections/Program";
import Marquee from "./components/sections/Marquee";
import { banner, conveneLogo, hero } from "./assets";
import AboutUs from "./components/sections/AboutUs";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Navbar */}
        <div className="fixed w-full top-0 z-50 backdrop-blur-sm">
          <Navbar />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 lg:bg-black/85 bg-black/85"></div>

        {/* Hero Content */}
        <div className="relative z-10 pt-12">
          <Hero />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Program Section */}
      <Program />

      {/* Gallery Section */}
      <Marquee />

      {/* Banner */}
      <div className="flex items-center h-full lg:gap-x-16 gap-x-6 justify-center my-10">
        <img src={banner} alt="Celebrate Africa" className="lg:w-auto w-52" />
        <img
          src={conveneLogo}
          alt="Convene Logo"
          className="lg:w-auto w-22 rounded lg:mt-10 mt-7"
        />
      </div>

      {/* About US */}
      <AboutUs />
    </>
  );
}

export default App;
