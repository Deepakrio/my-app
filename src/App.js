import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import About from"./components/page1" ;
import Page2 from"./components/page2" ;
import Table from"./components/page3" ;
import React, {useState} from 'react';




function App() {



  return (
    <div className="App">
      <Router>
      <div className="list">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="About">About</Link></li>
    <li><Link to="page2">Page2</Link></li>
    <li><Link to="Table">Details</Link></li>

  </ul>
</div>
  <Routes>
  <Route exact path="/" element={<h1>Welcome To React</h1>} />
    <Route exact path="About" element={<About title = 'Declarative' title2 = 'Component-Based' />} />
    <Route exact path="page2" element={<Page2 />} />
    <Route exact path="Table" element={<Table />} />

  </Routes>

 
</Router>
    </div>
  );
}



export default App;
