import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const toggle = () => {
    var sec = document.getElementById("sec");
    sec?.classList.toggle("active");
    var nav = document.getElementById("navigation");
    nav?.classList.toggle("active");
  };

  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img
            src="https://cdn.discordapp.com/attachments/689497832029421690/781295380448542741/imageonline-co-blackandwhiteimage.png"
            alt="LOGO"
          />
        </Link>
        <div id="toggle" onClick={toggle}>
          <GiHamburgerMenu size="3em" color="#1b9945" />
        </div>
      </header>
    </>
  );
};
