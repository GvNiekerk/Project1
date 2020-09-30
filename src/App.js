import React from 'react';
import logo from './images/Logo.png';
import image from './images/GerhardLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Name-Header">
          <h1 className="names" style={{ fontWeight: 200, marginBottom: 20, fontSize: 65 }}>
            GERHARD
        </h1>
          <h1 className="lastNames" style={{ fontWeight: 300, color: "#c60f0f", fontSize: 65 }}>VAN NIEKERK</h1>
          <div className="Menu-Header">
            <a href="#about" className="Menu-Text">ABOUT</a>
            <a href="#projects" className="Menu-Text">PROJECTS</a>
            <a href="#contact" className="Menu-Text" style={{ textAlign: "right" }}>CONTACT</a>
          </div>
        </div>
      </header>
      <div id="about" className="Light-Section hor-flex">
        <div style={{
          backgroundImage: "url(" + image + ")",
          height: 400,
          width: 325,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginRight: 100
        }}></div>
        <div className="Name-Header">
          <h1 style={{ color: "#c60f0f", fontSize: 45 }}>
            ABOUT
        </h1>
          <p style={{lineHeight: 1.5, maxWidth: 600, color: "white"}}>
            I am currently in my final year of study for a Bachelors of Science in Information Technology at the North West University Potchefstroom Campus.
            I have always had an interest in computers as my brothers taught me to play games with them at a young age.
            My hobbies include gaming, excercise, playing guitar, making jewelry and other trinkets and occasionally snorkeling.
            I started my studies with a year of Engineering after which I realised that it was not something I wanted to do, Information
            Technology interested me as I had already been using computers for most of my life and IT is much more versatile in the sense of
            freelancing and startup possibilities and a plethora of technologies to learn and master.
          </p>
        </div>
      </div>
      <div id="experience" className="Dark-Section">
        <h1 className="Menu-Header" style={{ color: "#FFFFFF", fontSize: 45 }}>EXPERIENCE</h1>
      </div>
      <div id="projects" className="Light-Section">
        <h1 className="Menu-Header" style={{ color: "#c60f0f", fontSize: 45, textAlign : top }}>PROJECTS</h1>
      </div>
      <div id="contact" className="Dark-Section">
        <h1 className="Menu-Header" style={{ color: "#FFFFFF", fontSize: 45 }}>CONTACT</h1>
        <h1 className="Menu-Header" style={{ color: "#c60f0f", fontSize: 35 }}>PLEASE ENTER YOUR NAME AND EMAIL AND I WILL CONTACT YOU</h1>
      </div>
    </div>
  );
}

export default App;
