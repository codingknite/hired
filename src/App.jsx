import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobDescription from "./components/JobDescription/JobDescription";
import { createGlobalStyle } from "styled-components";
import { COLORS, QUERIES } from "./styles/rootStyles";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.white};
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  button {
    background: #0a2463;
    color: ${COLORS.white}; 

    &:hover {
      transform: scale(1.05);
      transition: ease-in-out 500ms; 

      @media ${QUERIES.medium} {
        transform: scale(0);
      }
    }
  }
  
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:jobId" element={<JobDescription />} />
      </Routes>
    </>
  );
}
