import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function HEADER() {
  return (<>
    <nav className="topbar">

    <div className="topbar-left">
      <img src="https://documents.iplt20.com//ipl/assets/images/BCCI_logo.png" className="logo" />
      <span className="link-text">BCCI.TV</span>

      <div className="divider1"></div>

      <img src="https://documents.iplt20.com//ipl/assets/images/womens-premier-league-logonew.webp" className="logo" />
    </div>

    <div className="topbar-right">
      <span className="follow-text">Follow Us</span>
      <span className="social-icon close"><IoClose /></span>
      <span className="social-icon"><FaInstagram /></span>
      <span className="social-icon"><FaFacebookF /></span>
      <span className="social-icon"><FaTwitter /></span>
    </div>

  </nav>
  
  </>
  );
}

export default HEADER;
