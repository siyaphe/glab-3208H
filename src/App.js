// import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import './style.css'
import React from "react";
//Import new components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


//useParams?


export default function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
        <Nav />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/currencies" element={<Currencies />}/>
        <Route path="/price/:symbol" element={<Price />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}
