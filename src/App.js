import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/home';
import Projects from './Components/projects';
// import Resume from './Components/resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
