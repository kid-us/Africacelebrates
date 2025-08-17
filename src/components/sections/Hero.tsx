const Hero = () => {
  return (
    <div id="#Home" className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-[100dvh]">
        <div className="lg:w-3xl lg:px-0 px-5">
          <p className="text-primary lg:text-6xl text-4xl uppercase font-bold text-center">
            Africa Celebrates Women’s Forum 2025
          </p>
          <p className="text-xl font-semibold mt-5 text-center">
            5 November 2025
          </p>
          <p className="lg:text-2xl text-xl font-semibold text-zinc-400 text-center">
            United Nations Conference Centre in Addis Ababa (UNCC-AA)
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="https://owlevents.app/rsvp/?code=q4Mevgr6p9ah"
              className="flex items-center justify-center text-black font-semibold border border-secondary rounded-full w-60 h-12 bg-secondary transition-colors duration-300 hover:bg-secondary/60"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
