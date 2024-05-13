// import "./App.css";
// import axios from "axios";
// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";

import Nav from "./components/Nav";
import './style.css'
import React from "react";
//Import new components
import Meals from "./pages/Meals";
import Mealitem from "./pages/Mealitem";
import Home from './pages/Home';
import usersData from "./pages/Users";
import Users from './pages/Users';
import About from './pages/About';

//useParams?


 function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
        <Nav />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/currencies" element={<Currencies />}/>
        <Route path="/price/:symbol" element={<Price />}/>
        <Route path="/meals/" element={<Meals />}/>
        <Route path="/mealitem" element={<Mealitem />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/about" element={<About />}/>
       
      </Routes>
      
    </div>
  );
}
export  default App