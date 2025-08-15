import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import heroImg from "./assets/hero.webp";
import About from "./components/About";
import Program from "./components/Program";
import Marquee from "./components/Marquee";

function App() {
  return (
    <>
      {/* NAvbar and HEro */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/93"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="sticky top-0 backdrop-blur-2xl">
            <Navbar />
          </div>
          <Hero />
        </div>
      </div>

      {/* About */}
      <About />

      {/* Program */}
      <Program />

      {/* Gallery */}
      <Marquee />
    </>
  );
}

export default App;
