import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import Apropos from "./sections/Apropos";
import Competences from "./sections/Competences";
import Annexes from "./sections/Annexes";

function App() {
  return (
    <div className="font-sans bg-forBg text-white">
      <Navbar />
      <HeroSection />
      <Apropos />
      <Competences />
      <Annexes />
    </div>
  );
}

export default App;
