import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import About from"./components/page1" ;
import Page2 from"./components/page2" ;
import Table from"./components/page3" ;
import React, {useState} from 'react';
import Cart from './components/page2';
import ToReact from './components/page0';




function App() {


// Router
  return (
    <div className="App">
      <Router>
      <div className="list">
  
    <Link to="/">Home</Link>
    <Link to="About">About</Link>
   <Link to="Cart">cart</Link>
    <Link to="Table">Details</Link>
  
</div>
  <Routes>
  <Route exact path="/" element={<ToReact/> } />
    <Route exact path="About" element={<About title = 'Declarative' title2 = 'Component-Based' />} />
    <Route exact path="Cart" element={<Cart />} />
    <Route exact path="Table" element={<Table />} />

  </Routes>

 
</Router>
    </div>
  );
}



export default App;
