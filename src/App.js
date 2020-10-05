import React from 'react';
import logo from './images/Logo.png';
import image from './images/GerhardLogo.jpg';
import buildingImage from './images/building.jpg';
import Project1Screenshot from './images/EastCoastAdventures.png'; 
import Project2Screenshot from './images/RandburgStrengthFitness.jpg';
import Project3Screenshot from './images/VanillaEncryption.JPG';
import './App.css';
import emailjs from "emailjs-com";

function App() {

  class ContactForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        Fullname: "",
        Email: "",
        Message: ""
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.SendEmail = this.SendEmail.bind(this);
    }

    SendEmail(){
      var templateParams = {
        name: this.state.Fullname,
        message: this.state.Message,
        reply: this.state.Email
      }

      emailjs.send("Bx3lqCRk5ZkrXvrOPhtWhCgO", "template_vlzuivs", templateParams, "user_hpY3PtSjAxXEssBdYBHV9")
      .then(function(response){
        console.log("Yas bra")
      }, function(error){
        console.log("nee werk nie")
      });

    }
    handleNameChange(event) {
      this.setState({Fullname: event.target.value});
    }
    handleEmailChange(event) {
      this.setState({Email: event.target.value});
    }
    handleMessageChange(event) {
      this.setState({Message: event.target.value});
    }
    render() {
      return (
      <div className = "Form-Style">
        <form onSubmit={this.SendEmail}>
         <label style = {{color : "white", textAlign : "center"}}>Full name:</label><br/>
         <input className="Form-Input" type="text" value = {this.state.Fullname} onChange = {this.handleNameChange} placeholder = "Name"/><br/>
         <label style = {{color : "white", textAlign : "center"}}>Email:</label><br/>
         <input className = "Form-Input" type="text" value = {this.state.Email} onChange = {this.handleEmailChange} placeholder = "name@email.com"/><br/>
         <label style = {{color : "white", textAlign : "center"}}>Message:</label><br/>
         <textarea className="Form-Input" value = {this.state.Message} onChange = {this.handleMessageChange} style = {{height : "100px"}}/><br/>
         <input className="Form-Submit" type="submit" value="Submit" />

        </form>
      </div>
      )
    }
  }

  class ExperienceBar extends React.Component {
    render() {
      return (
        <div style={{marginBottom:25}}>
          <p style={{ color: "white" }}>{this.props.title}</p>
          <div style={{ minWidth: "100%", height: 5, backgroundColor: "black", borderRadius: 2 }}>
            <div style={{ maxWidth: this.props.level, height: 5, backgroundColor: "#c60f0f", borderRadius: 2 }}>
            </div>
          </div>
        </div>
      );
    }
  }
    class Project extends React.Component {
      render() {
        return (
          <div style ={{maxWidth : 400, margin: "10px 30px", textAlign : "center"}}>
            <div style={{
            backgroundImage: "url(" + this.props.screenshot + ")",
            height: 250,
            width: 400,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginRight: 100,
            borderRadius : 8,
            boxShadow : "0 10px 15px #00000070",
            marginBottom : "20px"}}>
          </div>
          <a href={this.props.link} target="_blank" style = {{color : "white", textAlign : "center !important", fontSize : "25px"}}>{this.props.title}</a>
          </div>
          
        );
      }
    }

    

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
          marginRight: 100,
          borderRadius : 8,
          boxShadow : "0 10px 15px #00000070"
        }}></div>
        <div className="Name-Header">
          <h1 style={{ color: "#c60f0f", fontSize: 45 }}>
            ABOUT
        </h1>
          <p style={{ lineHeight: 1.5, maxWidth: 600, color: "white" }}>
            I am currently in my final year of study for a Bachelors of Science in Information Technology at the North West University Potchefstroom Campus.
            I have always had an interest in computers as my brothers taught me to play games with them at a young age.
            My hobbies include gaming, excercise, playing guitar, making jewelry and other trinkets and occasionally snorkeling.
            
          </p>
          <p style={{ lineHeight: 1.5, maxWidth: 600, color: "white" }}>
            I started my studies with a year of Engineering after which I realised that it was not something I wanted to do, Information
            Technology interested me as I had already been using computers for most of my life and IT is much more versatile in the sense of
            freelancing and startup possibilities and a plethora of technologies to learn and master.
          </p>
        </div>
      </div>
      <div id="experience" className="Dark-Section hor-flex" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="Name-Header">
          <h1 style={{ color: "#c60f0f", fontSize: 45 }}>
            EXPERIENCE
        </h1>
          <p style={{ lineHeight: 1.5, maxWidth: 600, color: "white" }}>
            I spent approximately three weeks working as a landmeter for doing 3d laser scans of various buildings.
            I spent a week job shadowing at Signiflow digital signatures in their development department <a href="https://signiflow.com" target="_blank">SigniFlow</a>.
            I was a supervisor and barman for 6 weeks at a christmas market at the Walter Sisulu Botanical gardens organised by Event Ladies <a href="http://eventladiessa.co.za/" target="_blank">Event Ladies</a>.
        </p>
          <div style={{ minWidth: "100%" }}>
            <ExperienceBar title="Front end (HTML, CSS, JavaScript)" level="65%" />
            <ExperienceBar title="Java (Object Oriented Programming)" level="85%" />
            <ExperienceBar title="C#" level="75%"/>
            <ExperienceBar title="Python" level="35%"/>
          </div>
        </div>
        <div style={{
          backgroundImage: "url(" + buildingImage + ")",
          height: 400,
          width: 325,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginLeft: 100,
          borderRadius : 8,
          boxShadow : "0 10px 15px #00000070"
        }}></div>
      </div>
      <div id="projects" className="Light-Section">
        <h1 className="Menu-Header" style={{ color: "#c60f0f", fontSize: 45 }}>PROJECTS</h1>
        <hr style={{backgroundColor: "black", borderColor: "black"}}/>
        <div className="Project-Row">
          <Project title="East Coast Adventures" screenshot = {Project1Screenshot} link="https://github.com/GvNiekerk/East-Coast-Adventures" />
          <Project title="Randburg Strength and Fitness" screenshot = {Project2Screenshot} link="https://github.com/ivansnyman/Finale-Projek-V2.0"/>
          <Project title="Vanilla Encryption" screenshot = {Project3Screenshot} link="https://github.com/GvNiekerk/Vanilla-Encryption"/>
        </div>
      </div>
      <div id="contact" className="Dark-Section">
        <h1 className="Menu-Header" style={{ color: "#FFFFFF", fontSize: 45, padding : "20px 0" }}>CONTACT</h1>
        <hr style={{backgroundColor: "black", borderColor: "black"}}/>
        <ContactForm />
      </div>
    </div>
  );  
}

export default App;


//"start": "react-scripts start", for dev
//"start": "serve -s build", for heroku