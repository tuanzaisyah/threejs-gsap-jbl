import React from "react";
import { BsSoundwave } from "react-icons/bs";

const Home = () => {
  return (
    <section
      id="home"
      className="screen-max-width w-screen nav-height px-6 flex flex-col md:flex-row justify-center"
    >
      <div className="basis-1/3 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-6">
          JBL <span className="italic font-medium">Tour One</span> Wireless
        </h1>
        <p className="mb-6">
          From rich, punchy bass to thrilling top notes. You will always
          experience the ultimate sound experience
        </p>
        <div>
          <a href="#" className="btn">
            Discover Features
          </a>
        </div>
      </div>
      <div className="basis-2/3 flex flex-col justify-center relative">
        <div className="glassmorphism-home absolute top-20 md:top-56 right-0 md:right-16 lg:right-44 z-20">
          <h4>Total Music Playback</h4>
          <h5 className="text-2xl font-medium">
            50 <span className="text-xl">Hours</span>{" "}
          </h5>
        </div>
        <div className="glassmorphism-home flex flex-row gap-2 items-center absolute bottom-20 md:bottom-56 md:right-24 lg:right-10 z-20">
          <BsSoundwave className="border border-grey rounded-full p-1 text-3xl lg:text-4xl" />
          <h4 className="font-medium lg:text-2xl">Adaptive Noise Cancelling</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
