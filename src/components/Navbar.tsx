import { logo } from "@/assets";
import { nav } from "@/constants/nav";

const Navbar = () => {
  return (
    <nav className="max-w-4xl mx-auto flex justify-between items-center">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 md:w-28" />

      {/* Navigation */}
      <div className="flex space-x-10">
        {nav.map((n, idx) => (
          <a
            key={idx}
            href={n.path}
            className="text-zinc-400 hover:text-primary hover:-translate-y-1 hover:uppercase transition-all duration-300 text-sm w-12"
          >
            {n.label}
          </a>
        ))}
      </div>

      {/* Register Now */}
      <a
        href="https://owlevents.app/rsvp/?code=q4Mevgr6p9ah"
        className="flex items-center justify-center text-zinc-300 border border-secondary rounded-full w-40 h-10 bg-transparent hover:text-white hover:bg-secondary transition-colors duration-300 ring ring-secondary"
      >
        Register Now
      </a>
    </nav>
  );
};

export default Navbar;
