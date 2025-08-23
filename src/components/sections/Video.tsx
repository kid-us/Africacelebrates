import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div className="lg:h-[90dvh] lg:py-0 py-10 flex items-center justify-center">
      <div className="lg:h-[77dvh] md:h-[60dvh] h-[35dvh] w-full lg:w-[70%] lg:mx-0 mx-5">
        <div className="flex items-center justify-center h-full w-full rounded overflow-hidden">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=sV1wHxxm9iQ"
            width="100%"
            height="100%"
            playing
            loop
            controls
          />
        </div>
      </div>
    </div>
  );
}
