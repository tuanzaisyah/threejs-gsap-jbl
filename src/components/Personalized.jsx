import React, { useState } from "react";

const Personalized = () => {
  const [model, setModel] = useState({
    title: "JBL Tour One",
    color: ["#A89C8B", "#3b3b3b", "#53596E"],
  });

  const [selectedColor, setSelectedColor] = useState(model.color[0]);
  return (
    <section
      id="personalized"
      className="w-screen h-screen screen-max-width px-6 flex flex-col justify-between items-center"
    >
      <div>
        <button className="btn mt-20 cursor-pointer">Try Me</button>
      </div>
      <div className="selectedColor mb-20">
        <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-yellow-700 backdrop-blur">
          {model.color.map((color, i) => (
            <li
              key={i}
              className="w-6 h-6 rounded-full mx-2 cursor-pointer hover:border hover:border-yellow-200"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Personalized;
