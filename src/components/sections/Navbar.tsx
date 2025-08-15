// import { logo } from "@/assets";
// import { nav } from "@/constants/nav";
// import { Button } from "../ui/button";
// import { Menu } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="lg:max-w-4xl lg:px-0 px-5 lg:py-0 py-3 mx-auto flex justify-between items-center">
//       {/* Logo */}
//       <img src={logo} alt="Logo" className="w-28" />

//       {/* Navigation */}
//       <div className="lg:flex hidden space-x-10">
//         {nav.map((n, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               const aboutSection = document.getElementById(n.path);
//               if (aboutSection) {
//                 aboutSection.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//             className="text-zinc-400 hover:text-primary hover:-translate-y-1 hover:uppercase transition-all duration-300 text-sm w-12"
//           >
//             {n.label}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-x-5">
//         <Button className="text-white bg-transparent border border-secondary active:bg-secondary">
//           <Menu size={20} />
//         </Button>

//         {/* Register Now */}
//         <a
//           href="https://owlevents.app/rsvp/?code=q4Mevgr6p9ah"
//           className="flex items-center justify-center text-zinc-300 border border-secondary rounded-full w-40 h-10 bg-transparent hover:text-black font-semibold hover:bg-secondary transition-colors duration-300 ring ring-secondary"
//         >
//           Register Now
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { logo } from "@/assets";
import { nav } from "@/constants/nav";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close modal after clicking
    }
  };

  return (
    <nav className="lg:max-w-4xl lg:px-0 px-5 lg:py-0 mx-auto flex justify-between items-center relative z-50">
      {/* Logo */}
      <img src={logo} alt="Logo" className="md:w-28 w-24 z-50" />

      {/* Desktop Navigation */}
      <div className="lg:flex hidden space-x-10">
        {nav.map((n, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(n.path)}
            className="text-zinc-400 hover:text-primary hover:-translate-y-1 hover:uppercase transition-all duration-300 text-sm w-12"
          >
            {n.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden gap-x-5">
        <Button
          className="text-black border border-secondary bg-secondary w-9 h-8 !p-0"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={18} />
        </Button>
      </div>

      {/* Register Now */}
      <a
       const SectionTitle = ({ label }: { label: string }) => {
  return (
    <p className="border border-primary/20 rounded-full px-4 py-2 w-52 text-center bg-secondary/8 mb-10 mx-5 lg:mx-0
      bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
      {label}
    </p>
  );
};

export default SectionTitle;

        className="lg:flex hidden items-center justify-center text-zinc-300 border border-secondary rounded-full w-40 h-10 bg-transparent hover:text-black font-semibold hover:bg-secondary transition-colors duration-300 ring ring-secondary"
      >
        Register Now
      </a>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] w-full bg-black/100 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col items-center justify-center space-y-8`}
      >
        {/* Close Button */}
        <Button
          className="absolute top-5 right-5 text-black border border-secondary bg-secondary w-9 h-8 !p-0"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </Button>

        {/* Mobile Links */}
        {nav.map((n, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(n.path)}
            className="text-xl text-white uppercase hover:text-primary transition-colors duration-300"
          >
            {n.label}
          </button>
        ))}

        <a
          href="https://owlevents.app/rsvp/?code=q4Mevgr6p9ah"
          className="flex items-center justify-center border border-secondary rounded-full w-44 h-10 text-black font-semibold bg-secondary transition-colors duration-300 ring ring-secondary"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
