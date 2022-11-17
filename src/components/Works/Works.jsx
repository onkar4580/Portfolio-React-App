import React, { useContext } from "react";
import "./Works.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Internship
          </span>
          <span></span>
          <spane>
          
          <h3>Blockchain Intern | 03/2022 - 05/2022</h3>
          <h4>At - Rapid Innovation</h4>
          Learnt solidity and written smart contracts on Ethereum Blockchain
          <br />
          using both Truffle and Hardhat.
          <br />
          Interacted and Implemented ERC20, ERC721, ERC1155 Tokens &
          <br />
          wrote and deployed Smart Contracts on Remix IDE
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      
    </div>
  );
};

export default Works;
