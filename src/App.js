import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommendation from "./components/Recommendation";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Recommendation/>
      <Footer />
    </div>
  );
}

export default App;
