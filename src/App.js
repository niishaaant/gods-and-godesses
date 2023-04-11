import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";
import Hero from "./Components/Hero";
import Background from "./Components/Background";
import Roadmap from "./Components/Roadmap";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";
import Minting from "./Components/Minting";
import TeamSupport from "./Components/TeamSupport";

const App = () => {
  return (
    <>
      <Background />
      <Nav />
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/buynft" element={<Minting />} />
        <Route path="/teamsupport" element={<TeamSupport />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
