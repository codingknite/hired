import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobDescription from "./components/JobDescription/JobDescription";
import { createGlobalStyle } from "styled-components";
import { COLORS } from "./styles/rootStyles";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.white};
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
