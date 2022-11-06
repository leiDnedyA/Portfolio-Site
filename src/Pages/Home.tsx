
import {FaGithub, FaInstagramSquare} from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import AutoTypingHeader from '../Elements/AutoTypingHeader';
import SocialLinks from '../Elements/SocialLinks';

export default (): JSX.Element => {
    return <div className="home">
        <div className="home-header">
            <AutoTypingHeader className="home-header-header" text="hi, i'm ayden..."/>
            <SocialLinks className="home-socials" />
            <p className="home-bio">I'm a frontend web developer living in Boston, MA. I'm currently a CS undergrad student at UMass Boston.</p>
        </div>
        <Model3D width="500px" height="500px"/>

    </div>
}
