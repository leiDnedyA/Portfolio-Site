import './Projects.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ProjectDisplay from "../Elements/ProjectDisplay"
import LinkButton from '../Elements/LinkButton';
import { SiGithub } from 'react-icons/si';

interface Project {
    title: string;
    imageSrc: string;
    description: string;
    links: Array<string>;
}

interface Props {
    projectsList: Array<Project>;
}

export default (props: Props): JSX.Element => {
    return <div className="Projects">
        <div className="projects-header">
            <AutoTypingHeader className="projects-header-header" text="My Projects 💻 " useDots={true}/>
            <p className="projects-header-description">Here are some projects I've worked on.</p>
        </div>
        <div className="projects-container">
            {props.projectsList.map((p, i) => (
                <ProjectDisplay title={p.title} alignImageLeft={i%2 == 0} imageSRC={p.imageSrc}
                    description={p.description} links={p.links} key={i}/>
            ))}
        </div>
        <LinkButton text={<div>Check out my GitHub page! <SiGithub /></div>} link="https://github.com/leiDnedyA"/>
    </div>
}