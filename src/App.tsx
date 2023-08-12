import './App.css';
import Navbar from './Elements/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import projectsJson from "./assets/project_data.json";
import Footer from './Elements/Footer';
/**
 * TODO: Build the website from scratch again (eventually)
 * 
 * For now:
 *  - Update AutoTypingHeader component to be function component and 
 *    use useDots prop correctly.
 *  - Deploy to heroku
 *  - Fix the problem with react router dom that gives 404 if the 
 *    user tries to access a link other than the home route 
 *    ex: works if user starts at "/" and then goes to /contact via navbar
 *        doesn't work if user starts at "/contact"
 */
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
