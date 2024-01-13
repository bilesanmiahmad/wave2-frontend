import React, { useState } from "react";
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
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
    };

    try {
        const response = await fetch("http://localhost:8000/contact/", options);
        const data = await response.json();
        console.log(data);
        setEmail("");
    } catch (error) {
        alert("Email added successfully");
    }
    }
 };
  return (
    <div className="App">
      <Hero />
      <main>
        <Home />
        <Panel email={email} setEmail={setEmail} handleSubmit = {handleSubmit} />
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
