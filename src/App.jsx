import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Router>
        <Routes>
          <Route path="/" element={<AboutMePage />} /> 
          <Route path="/experience" exact element={<ExperiencePage />} />  
          <Route path="/projects" exact element={<ProjectsPage />} />       
        </Routes>
      </Router>
    </>
  )
}

export default App
