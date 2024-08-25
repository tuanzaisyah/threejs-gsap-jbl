import React, { useState } from "react";

const Personalized = ({ setTryMode, setSelectedColor, originalColor }) => {
  const [model, setModel] = useState({
    title: "JBL Tour One",
    color: ["#A89C8B", "#3b3b3b", "#53596E", "#e8e5e2"],
  });

  const [isTryMode, setIsTryMode] = useState(false);

  const handleTry = () => {
    setIsTryMode(!isTryMode);
    setTryMode(!isTryMode);

    // Reset to original color when exit try mode
    if (isTryMode) {
      setSelectedColor(originalColor);
    }
  };

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <section
      id="personalized"
      className={`w-screen h-screen screen-max-width px-6 flex flex-col  items-center relative z-20 ${
        isTryMode ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <div className="pointer-events-auto">
        <button
          className="btn mt-20 cursor-pointer hover:opacity-80 transition-opacity relative z-20"
          onClick={handleTry}
        >
          {isTryMode ? "Exit" : "Try Me"}
        </button>
      </div>
      {isTryMode && (
        <div className="absolute bottom-20 pointer-events-auto z-20">
          <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-yellow-700 backdrop-blur">
            {model.color.map((color, i) => (
              <li
                key={i}
                className="w-6 h-6 rounded-full mx-2 cursor-pointer hover:border hover:border-yellow-200"
                style={{ backgroundColor: color }}
                onClick={() => handleColor(color)}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Personalized;
