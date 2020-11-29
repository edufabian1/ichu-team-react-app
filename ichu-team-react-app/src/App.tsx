import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

import "./App.css";
import Home from "./components/Home/Home";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function toggle() {
  var sec = document.getElementById("sec");
  sec?.classList.toggle("active");
  var nav = document.getElementById("navigation");
  nav?.classList.toggle("active");
}
function App() {
  return (
    <div className="App">
      <div className="banner" id="sec">
        <header>
          <a href="/" className="logo">
            <img
              src="https://cdn.discordapp.com/attachments/689497832029421690/781295380448542741/imageonline-co-blackandwhiteimage.png"
              alt="LOGO"
            />
          </a>
          <div id="toggle" onClick={toggle}><GiHamburgerMenu size="3em" color="#1b9945"/></div>
        </header>
        <Home />
        <SocialMedia />
      </div>

      <div id="navigation">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Nosotros</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
