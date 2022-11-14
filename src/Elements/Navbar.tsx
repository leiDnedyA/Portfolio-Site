import './Navbar.css'
import { Link } from "react-router-dom";

interface LinkObject {
    label: string;
    destination: string;
}

interface Props {
    links: Array<LinkObject>;
    className?: string;
}

export default (props: Props): JSX.Element => {
    
    const linkElements = [];

    for(let i in props.links){
        let linkObj = props.links[i]
        let link = <Link className="navbar-link nav-hover-animation" key={`navbar-link-${i}`} to={linkObj.destination}>{linkObj.label}</Link>
        linkElements.push(link);
    }
    
    return <div className={`navbar${props.className ? ' ' + props.className : ''}`}>
        {linkElements}
    </div>
}
