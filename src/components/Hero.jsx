import React from "react";
import spacex from "../img/spacex.jpg";

function Hero({ header, text }) {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${spacex})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold ">{header}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
