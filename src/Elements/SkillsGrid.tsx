import './SkillsGrid.css';
import {SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript, SiVisualstudiocode} from 'react-icons/si'

const SkillsGrid = (): JSX.Element => {

    const skills = [
        {
            label: 'TypeScript',
            elem: <SiTypescript />
        },
        {
            label: 'JavaScript',
            elem: <SiJavascript />
        },
        {
            label: 'React',
            elem: <SiReact />
        },
        {
            label: 'HTML5',
            elem: <SiHtml5 />
        },
        {
            label: 'CSS3',
            elem: <SiCss3 />
        },
        {
            label: 'Python',
            elem: <SiPython />
        },
        {
            label: 'VSCode',
            elem: <SiVisualstudiocode />
        },
        {
            label: 'GitHub',
            elem: <SiGithub />
        },
        {
            label: 'Git',
            elem: <SiGit />
        }
        
        
    ]

    return <div className="SkillsGrid">
        {skills.map(skill=>{
            return <div className="skill-grid-item">
                <div className="skill-container hover-animation">
                    <div className="skill-grid-icon">{skill.elem}</div>
                    <p className="skill-grid-label">{skill.label}</p>
                </div>
            </div>;
        })}
    </div>
}

export default SkillsGrid