import { useRef, useState } from "react";
import CanvasContainer from "./components/CanvasContainer";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Personalized from "./components/Personalized";

function App() {
  const [tryMode, setTryMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#A89C8B");
  const originalColor = "#A89C8B";
  const controlRef = useRef();
  return (
    <>
      <CanvasContainer tryMode={tryMode} selectedColor={selectedColor} />
      {!tryMode && (
        <>
          <Navbar />
          <Home />
          <Features />
        </>
      )}
      <Personalized
        setTryMode={setTryMode}
        setSelectedColor={setSelectedColor}
        originalColor={originalColor}
        controlRef={controlRef}
      />
      {!tryMode && (
        <>
          <Highlights />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
