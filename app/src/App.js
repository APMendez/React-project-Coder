import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import image from '../src/img/cart-widget.png';

//COMPONENTS
import CartWidget from './components/cart';
import NavbarContainer from './components/navbarContainer';

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer logo={"APICAL"}>
          <CartWidget amount={"0"} style={{backgroundImage: image}}/>
        </NavbarContainer>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>  
    </div>
    </BrowserRouter>
    
  );
}

export default App;
