import { SiReact, SiTypescript, SiPython, SiHtml5, SiCss3, SiJavascript, SiNodedotjs } from 'react-icons/si'
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import AutoTypingHeader from '../Elements/AutoTypingHeader';
import SocialLinks from '../Elements/SocialLinks';
import SkillsGrid from '../Elements/SkillsGrid';
import './Home.css'
import { useEffect, useState } from 'react';

const TYPED_HEADER_BREAKPOINT = 380;

export default (): JSX.Element => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);
    return <div className="home-container">
        <div className="home">
        <div className="home-header">
            <AutoTypingHeader className="header home-header-header" text="Hi, I'm Ayden" useDots={windowWidth > TYPED_HEADER_BREAKPOINT} />
            <p className="home-bio">I'm a developer and undergrad researcher in Boston, MA.</p>
        </div>
        <h2 className="subheader">My tech stack</h2>
        <div className="home-skills-grid">
            <SkillsGrid />
        </div>
    </div>
    </div>
}
