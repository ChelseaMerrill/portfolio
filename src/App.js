import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Homepage/home';
import Projects from './Components/Projects/projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
