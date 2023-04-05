import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import "./App.css";
import Hero from "./Components/Hero";
import Background from "./Components/Background";

const App = () => {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    setScrolled(window.scrollY);
    console.log();
  });
  return (
    <>
      <Background />
      <Nav />
      <Hero />
    </>
  );
};

export default App;
