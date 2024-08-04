import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-screen  px-6 bg-yellow-700">
      <div className="screen-max-width">
        <div className="h-screen flex flex-col md:flex-row justify-center items-center ">
          <div className="basis-2/3">model</div>
          <div className="basis-1/3">
            <h5 className="font-medium ">01</h5>
            <h4 className="font-semibold text-2xl">JBL Pro Sound</h4>
            <p>All powered by legendary Hi-Res certified JBL Pro Sound</p>
          </div>
        </div>
        <div className="h-screen flex flex-col md:flex-row justify-center items-center ">
          <div className="basis-2/3 md:order-2">model</div>
          <div className="basis-1/3">
            <h5 className="font-medium ">02</h5>
            <h4 className="font-semibold text-2xl">
              True Adaptive Noise Cancelling
            </h4>
            <p>Enjoy the soundtrack of your life no matter where your are</p>
          </div>
        </div>
        <div className="h-screen flex flex-col md:flex-row justify-center items-center ">
          <div className="basis-2/3">model</div>
          <div className="basis-1/3">
            <h5 className="font-medium ">03</h5>
            <h4 className="font-semibold text-2xl">
              Up to 50 hours of playback
            </h4>
            <p>
              Enjoy up to 50 hours of playback, or up to 30 hours with True
              Adaptive Noise Cancelling enabled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
