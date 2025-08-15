import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import heroImg from "./assets/hero.webp";
import About from "./components/About";
import Program from "./components/Program";
import Marquee from "./components/Marquee";
import { banner } from "./assets";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Sticky Navbar */}
        <div className="fixed w-full top-0 z-50 backdrop-blur-sm">
          <Navbar />
        </div>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/90"></div>

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

      {/* Logo */}
      <div className="flex items-center justify-center my-10">
        <img src={banner} alt="Celebrate Africa" />
      </div>
    </>
  );
}

export default App;
