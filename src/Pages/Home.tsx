import { SiReact, SiTypescript, SiPython, SiHtml5, SiCss3, SiJavascript, SiNodedotjs } from 'react-icons/si'
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import AutoTypingHeader from '../Elements/AutoTypingHeader';
import SocialLinks from '../Elements/SocialLinks';
import SkillsGrid from '../Elements/SkillsGrid';

export default (): JSX.Element => {
    return <div className="home">
        <div className="home-header">
            <AutoTypingHeader className="header home-header-header" text="Hi, I'm Ayden" />
            <p className="home-bio">I'm a developer and undergrad researcher based in Boston, MA.</p>
        </div>
        <h2 className="subheader">My skills</h2>
        <div className="home-skills-grid">
            <SkillsGrid />
        </div>
    </div>
}
