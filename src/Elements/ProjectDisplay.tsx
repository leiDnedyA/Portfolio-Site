import './ProjectDisplay.css'

interface Props{
    title: string;
    imageSRC: string;
    description: string;
    links: Array<string>;
    alignImageLeft?: boolean;
}

const ProjectDisplay = (props: Props): JSX.Element => {
    return <div className={"ProjectDisplay " + (props.alignImageLeft? 'align-img-left' : 'align-img-right')}>
        <h2 className='hover-animation'>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.imageSRC}/>
        <div className="links">{props.links.map(src=><a href={src}>{src}</a>)}</div>
    </div>
}

export default ProjectDisplay