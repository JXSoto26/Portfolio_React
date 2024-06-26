import React from "react";
import resumePDF from "../Jeremy_Soto.pdf"; // Import your PDF file

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Hi, I am Jeremy Soto Flores</h1>
        <h3>
          Software Developer
        </h3>
        <a href={resumePDF} download="Jeremy_Soto.pdf" className="btn hero-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}
