import './App.css';
import Navbar from './Elements/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import projectsJson from "./assets/project_data.json";
import Footer from './Elements/Footer';

function App() {
  return (
    <div className="App">
      <Navbar links={[
        { label: 'Home', destination: '/' },
        { label: 'Projects', destination: '/projects' },
        { label: 'Contact', destination: '/contact' }]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects projectsList={projectsJson}/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
