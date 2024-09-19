import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import Apropos from "./sections/Apropos";
import Competences from "./sections/Competences";
import Annexes from "./sections/Annexes";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans bg-forBg text-white">
      <Navbar />
      <HeroSection />
      <Apropos />
      <Competences />
      <Annexes />
      <Contact />
    </div>
  );
}

export default App;
