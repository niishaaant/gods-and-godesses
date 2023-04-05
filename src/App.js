import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";
import Hero from "./Components/Hero";
import Background from "./Components/Background";
import Roadmap from "./Components/Roadmap";

const App = () => {
  return (
    <>
      <Background />
      <Nav />
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </>
  );
};

export default App;
