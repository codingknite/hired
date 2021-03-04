import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import JobDescription from "./components/JobDescription";
import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:jobId" element={<JobDescription />} />
      </Routes>
    </>
  );
}
