import React from "react";
import Highlight1 from "../assets/highlight1.png";
import Highlight2 from "../assets/highlight2.png";
import Highlight3 from "../assets/highlight3.png";
import Highlight4 from "../assets/highlight4.png";

const Highlights = () => {
  return (
    <section id="highlights" className="w-screen h-full bg-yellow-700">
      <div className="screen-max-width px-6 py-10 flex flex-col gap-6 md:gap-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="glassmorphism rounded-2xl md:basis-2/3 flex flex-col md:flex-row">
            <img
              src={Highlight1}
              alt="highlight1"
              className="h-auto w-full md:w-[300px] lg:w-[400px] object-cover rounded-t-2xl md:rounded-l-xl md:rounded-r-none"
            />
            <div className="p-4 flex flex-col justify-center">
              <h4 className="font-medium text-xl lg:text-2xl mb-2">
                Low Volume Dynamic EQ
              </h4>
              <p>
                Protect your hearing without compromising your listening
                experience
              </p>
            </div>
          </div>
          <div className="glassmorphism rounded-2xl md:basis-1/3">
            <img
              src={Highlight2}
              alt="highlight2"
              className="h-auto w-full rounded-t-2xl"
            />
            <div className="p-4">
              <h4 className="font-medium text-xl lg:text-2xl mb-2">
                Smart Ambient Sound
              </h4>
              <p>
                Stay alert to the sounds of the world around you while enjoying
                your music with Smart Ambient
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="glassmorphism rounded-2xl md:basis-2/5">
            <img
              src={Highlight3}
              alt="highlight3"
              className="h-auto w-full rounded-t-2xl"
            />
            <div className="p-4">
              <h4 className="font-medium text-xl lg:text-2xl mb-2">
                4-Mic Superior Calls with Voice Control
              </h4>
              <p>
                The algorithm allows you to have better conversations even in
                loud or windy environments
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-4 md:basis-3/5">
            <div className="glassmorphism rounded-2xl flex flex-col md:flex-row basis-3/4">
              <img
                src={Highlight4}
                alt="highlight4"
                className="h-auto w-full md:w-[300px] lg:w-[400px] object-cover rounded-t-2xl md:rounded-l-xl md:rounded-r-none"
              />
              <div className="p-4 flex flex-col justify-center">
                <h4 className="font-medium text-xl lg:text-2xl mb-2">
                  Smart Talk for Seamless Chats
                </h4>
                <p>
                  You don’t have to pause for the music to have a quick
                  conversation
                </p>
              </div>
            </div>
            <div className="glassmorphism rounded-2xl flex flex-col md:flex-row items-center gap-4 p-4 basis-1/4">
              <h4 className="font-medium text-xl">
                Personalized How You Listen
              </h4>
              <div>
                <a href="#" className="btn-alt !px-4">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
