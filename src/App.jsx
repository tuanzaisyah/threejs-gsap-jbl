import CanvasContainer from "./components/CanvasContainer";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Personalized from "./components/Personalized";

function App() {
  return (
    <>
      <div className="h-screen w-full fixed top-0 z-10">
        <CanvasContainer />
      </div>
      <Navbar />
      <Home />
      <Features />
      <Personalized />
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
