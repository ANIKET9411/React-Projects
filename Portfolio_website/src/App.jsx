import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Mywork from "./Components/My work/Mywork";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="nav_home">
        <Navbar />
        <Home />
      </div>
      <About />
      <Mywork />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
