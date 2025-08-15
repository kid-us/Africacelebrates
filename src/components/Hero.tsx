const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-[90dvh]">
        <p className="text-primary text-6xl uppercase font-bold w-2xl  text-center">
          Africa Celebrates Women’s Forum 2025
        </p>
        <p className="text-xl my-3">5 November 2025</p>
        <p className="text-lg">
          United Nations Conference Centre in Addis Ababa (UNCC-AA)
        </p>
        <div className="mt-10">
          <a
            href="https://owlevents.app/rsvp/?code=q4Mevgr6p9ah"
            className="flex items-center justify-center text-black text-sm font-semibold border border-secondary rounded w-52 h-11 bg-secondary transition-colors duration-300 ring ring-primary hover:bg-secondary/80"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
