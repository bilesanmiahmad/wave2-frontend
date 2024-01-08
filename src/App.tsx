import { useState } from "react";
import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Panel from './Components/JoinPanel';
import Opinions from './Components/Opinions';
import Home from './Components/Home';
import HowItWorks from "./Components/HowItWorks";
import FAQ from "./Components/FAQs";
import Contact from "./Components/Contact";

function App() {
  const [email, setEmail] = useState("email");
  return (
    <div className="App">
      <Hero />
      <Home />
      <Panel email={email} />
      <Opinions />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
