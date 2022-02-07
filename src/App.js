import Navbar from "components/Navbar/Navbar";
import Hero from "layouts/Hero/Hero";
import HowDoesItWork from "layouts/HowDoesItWork/HowDoesItWork";
import Stats from "layouts/Stats/Stats";
import Team from "layouts/Team/Team";
import TOKENOMICS from "layouts/TOKENOMICS/TOKENOMICS";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <HowDoesItWork />
      <TOKENOMICS />
      <Team />
    </div>
  );
}

export default App;
