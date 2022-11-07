import { Link } from "react-router-dom";

interface LinkObject {
    label: string;
    destination: string;
}

interface Props {
    links: Array<LinkObject>;
}

export default (props: Props): JSX.Element => {
    
    const linkElements = [];

    for(let i in props.links){
        let linkObj = props.links[i]
        let link = <Link className="navbar-link" key={`navbar-link-${i}`} to={linkObj.destination}>{linkObj.label}</Link>
        linkElements.push(link);
    }
    
    return <div className="navbar">
        {linkElements}
    </div>
}
