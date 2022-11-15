import './Projects.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ProjectDisplay from "../Elements/ProjectDisplay"

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
            <AutoTypingHeader className="projects-header-header" text="My Projects" />
            <p className="projects-header-description">Psssttt... Check out <a className="no-bold" href="">my GitHub profile</a>! Here are a few of the projects I've worked on over the past couple years.</p>
        </div>
        <div className="projects-container">
            {props.projectsList.map(p => (
                <ProjectDisplay title={p.title} imageSRC={p.imageSrc}
                    description={p.description} links={p.links} />
            ))}
        </div>
    </div>
}