import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="project-logo">
          <h1 className="logo-text">H I R E D!</h1>
        </div>
        <div className="nav-bar">
          <div className="remote-button">
            <p>remote jobs</p>
          </div>
          <div className="darkmode-toggle">
            <FaIcons.FaMoon />
          </div>
        </div>
        <div className="slogan">
          <h2>JOB BOARD FOR DEVELOPERS AND CREATIVE PROS</h2>
        </div>
      </header>
    </>
  );
}
