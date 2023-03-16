import React from 'react';
//import Routes
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import LandingPage from "./components/Landing";
import Products from "./components/Products";
//import new componenets
import Profile from "./components/Profile";
import Legal from "./components/Legal";
import Navigation from './components/Navigation';
import Calculator from './components/Calculator';



function App () {
    return(
      <div className = 'App'>
        <Header />
        <Navigation />
        <Routes>
          <Route exact path= "/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
    );
}

export default App;

/* Note to reviewer:
I used a navigation component to keep it more clean and easy to read. The
Header and Navigation menu need to be on each page, so they are excluded 
from the <Routes>.*/