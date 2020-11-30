import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="banner" id="sec">
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/nosotros"></Route>
            <Route path="/contacto">
              <Contact />
            </Route>
          </Switch>

          <SocialMedia />
        </div>

        <div id="navigation">
          <ul>
            <li>
              <Link to="/" onClick={() => console.log("disable toggle")}>Inicio</Link>
            </li>
            <li>
              <Link to="/Nosotros" onClick={() => console.log("disable toggle")}>Nosotros</Link>
            </li>
            <li>
              <Link to="/Contacto" onClick={() => console.log("disable toggle")}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
