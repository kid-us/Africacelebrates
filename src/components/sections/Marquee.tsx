import React from "react";
import "./marquee.css";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
} from "@/assets";

interface Testimony {
  id: number;
  img: string;
}

const Marquee = () => {
  const firstFiveTestimonies: Testimony[] = [
    {
      id: 1,
      img: one,
    },
    {
      id: 2,
      img: two,
    },
    {
      id: 3,
      img: three,
    },
    {
      id: 4,
      img: four,
    },
    {
      id: 5,
      img: five,
    },
  ];

  const secondFiveTestimonies: Testimony[] = [
    {
      id: 6,
      img: six,
    },
    {
      id: 7,
      img: seven,
    },
    {
      id: 8,
      img: eight,
    },
    {
      id: 9,
      img: nine,
    },
    {
      id: 10,
      img: ten,
    },
  ];

  return (
    <div id="#Gallery" className="flex items-center justify-center py-10 px-6">
      <div className="max-w-6xl w-full">
        <p className="border border-primary rounded-full px-4 py-2 w-52 text-center text-white bg-secondary/10 mb-10">
          Our Gallery
        </p>
        {/* Forward Marquee */}
        <div
          className="marquee fadeout-horizontal"
          style={
            {
              "--num-items": firstFiveTestimonies.length,
            } as React.CSSProperties
          }
        >
          <div className="marquee-track">
            {firstFiveTestimonies.map((t) => (
              <div
                className="marquee-item"
                style={{ "--item-position": t.id } as React.CSSProperties}
              >
                <img src={t.img} className="h-full" alt={`Gallery - ${t.id}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Reverse */}
        <div
          className="marquee fadeout-horizontal mt-10"
          style={
            {
              "--num-items": secondFiveTestimonies.length,
              "--direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="marquee-track">
            {secondFiveTestimonies.map((t) => (
              <div
                className="marquee-item"
                style={{ "--item-position": t.id } as React.CSSProperties}
              >
                <img src={t.img} alt={`Gallery - ${t.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
