import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>We Care, <span>She Wins</span></h1>
        <p>
          We here provide healthcare solutions to women. We create blogs on
          reproductive health, mental health and hygiene. Our app provides a
          proper menstrual hygiene management which can reduce school dropout
          and increase women empowerment.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>

      <div className="hero-right">
        <img src="/girls.png" alt="Healthcare Illustration" />
        <div className="quote-box">
          <p>
            “Precisely what menstruation is, is not yet very well known.”
          </p>
          <span>- G. Stanley Hall</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
