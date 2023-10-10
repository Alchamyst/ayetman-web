import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<AboutMePage />} /> 
          <Route path="/experience" exact element={<ExperiencePage />} />  
          <Route path="/projects" exact element={<ProjectsPage />} />       
        </Routes>
      </Router>
    </>
  )
}

export default App
