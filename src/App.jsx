import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
