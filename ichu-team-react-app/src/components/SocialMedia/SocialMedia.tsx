import React from "react";
import { IconContext } from "react-icons/lib";
import { AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <>
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
    </>
  );
};

export default SocialMedia;
