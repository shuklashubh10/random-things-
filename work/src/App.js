import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
              <div class="topnav">
                      <a class="active" href="#home">Home</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
                      <input type="text" placeholder="Search.."></input>
                      <button type="submit">Search</button>
                </div>    

            <div className="side-nav">
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
              
            </div>

            <div className="main">
              <video autoPlay muted loop id="myVideo">
              <source src={require("./background.mp4")} type ="video/mp4"></source>
              </video>

              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate autem at nam eaque fugit nulla asperiores cupiditate dicta, adipisci optio excepturi aut ipsum blanditiis culpa sequi non laborum impedit?</p>
              </div>

            </div>


      </div>
    
  );
}

export default App;
