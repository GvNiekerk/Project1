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
            I started getting an interest in computers at a young age playing games with my brothers
            wararararar akkedis kobus
          </p>
        </div>
      </div>
      <div id="projects" className="Dark-Section">
        <h1 className="Menu-Header" style={{ color: "#FFFFFF", fontSize: 45 }}>PROJECTS</h1>
      </div>
      <div id="contact" className="Light-Section">
        <h1 className="Menu-Header" style={{ color: "#c60f0f", fontSize: 45 }}>CONTACT</h1>
        <h1 className="Menu-Header" style={{ color: "#FFFFFF", fontSize: 35 }}>PLEASE ENTER YOUR NAME AND EMAIL AND I WILL CONTACT YOU</h1>
      </div>
    </div>
  );
}

export default App;
