import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Panel from './Components/JoinPanel';
import Opinions from './Components/Opinions';
import Home from './Components/Home';
import HowItWorks from "./Components/HowItWorks";
import FAQ from "./Components/FAQs";
import Contact from "./Components/Contact";

const App:React.FC = ()=> {
  return (
    <div className="App">
      <Hero />
      <main>
        <Home />
        <Panel />
        <Opinions />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
