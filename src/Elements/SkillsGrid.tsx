import './SkillsGrid.css';
import {SiCss3, SiGithub, SiHtml5, SiJavascript, SiNodedotjs, SiPython, SiReact, SiTypescript, SiFlask} from 'react-icons/si'

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
            label: 'Node.js',
            elem: <SiNodedotjs />
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
            label: 'Flask',
            elem: <SiFlask/>
        },
        {
            label: 'GitHub',
            elem: <SiGithub />
        }
        
        
    ]

    return <div className="SkillsGrid">
        {skills.map((skill, i)=>{
            return <div className="skill-grid-item" key={`item${i}`}>
                <div className="skill-container hover-animation" key={`container${i}`}>
                    <div className="skill-grid-icon" key={`icon${i}`}>{skill.elem}</div>
                    <p className="skill-grid-label" key={`label${i}`}>{skill.label}</p>
                </div>
            </div>;
        })}
    </div>
}

export default SkillsGrid
