
import {FaGithub, FaInstagramSquare} from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import SocialLinks from '../Elements/SocialLinks';

export default (): JSX.Element => {
    return <div className="home">
        <div className="home-header">
            <h1 className="home-header-header">hi, i'm ayden!</h1>
            <SocialLinks className="home-socials" />
            <p className="home-bio">I'm a frontend web developer living in Boston, MA. I'm currently a CS undergrad student at UMass Boston.</p>
        </div>
        <Model3D width="500px" height="500px"/>

    </div>
}
