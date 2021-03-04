import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="project-logo">
          <h1 className="logo-text">h i r e d!</h1>
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
          <h2>job board for developers and creative pros</h2>
        </div>
      </header>
    </>
  );
}
