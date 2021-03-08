import React from "react";
import { HeaderSection } from "./styles";

export default function Header() {
  return (
    <>
      <HeaderSection>
        <div className="header-info">
          <div className="project-logo">
            <h1>Hired</h1>
          </div>
          <div className="slogan">
            <h2>The leading job board for developers and creative pros</h2>
          </div>
        </div>
      </HeaderSection>
    </>
  );
}
