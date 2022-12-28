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
        </div>
        <div className="projects-container">
            {props.projectsList.map((p, i) => (
                <ProjectDisplay title={p.title} alignImageLeft={i%2 == 0} imageSRC={p.imageSrc}
                    description={p.description} links={p.links} />
            ))}
        </div>
    </div>
}