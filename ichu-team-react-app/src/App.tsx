import React from "react";
import { AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./App.css";

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
          <div id="toggle" onClick={toggle}></div>
        </header>
        <div className="content">
          <h2>
            Bienvenido a <span>Ichu team</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo
            maiores nam quibusdam fugit fugiat, deleniti optio nulla quasi,
            tempore reiciendis doloribus consequatur neque voluptate doloremque
            adipisci, asperiores repudiandae. Quod!
          </p>
          <a href="/" className="btn-info">Saber mas</a>
        </div>
        <ul className="sci">
          <IconContext.Provider value={{ color: "#1b9945", size: "4em" }}>
            <li>
              <a href="https://www.facebook.com/groups/289385809031879/">
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/edufabian1/ichu-team-react-app">
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/8TzGxmGB7s">
                <FaDiscord />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
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
