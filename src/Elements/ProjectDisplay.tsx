import { Fragment } from 'react';
import './ProjectDisplay.css'

interface Props {
    title: string;
    imageSRC: string;
    description: string;
    links: Array<string>;
    alignImageLeft?: boolean;
}

const ProjectDisplay = (props: Props): JSX.Element => {
    return <div className={"ProjectDisplay " + (props.alignImageLeft ? 'align-img-left' : 'align-img-right')}>
        <h2 className='hover-animation'>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.imageSRC} />
        <div className="links">{props.links.map(
            (src, i) => <Fragment key={`b${i}`}>
                <a href={src} key={i}>{src}</a>
                <br key={`a${i}`}/>
            </Fragment>
            )}</div>
    </div >
}

export default ProjectDisplay