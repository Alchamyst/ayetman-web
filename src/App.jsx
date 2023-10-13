import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMePage from './views/AboutMePage';
import ContactPage from './views/ContactPage';
import ExperiencePage from './views/ExperiencePage';
import ProjectsPage from './views/ProjectsPage';

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<AboutMePage />} /> 
            <Route path="/experience" exact element={<ExperiencePage />} />  
            <Route path="/projects" exact element={<ProjectsPage />} />     
            <Route path="/contact" exact element={<ContactPage />} />     
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;