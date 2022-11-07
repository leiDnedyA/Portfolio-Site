
import {FaGithub, FaInstagramSquare} from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import AutoTypingHeader from '../Elements/AutoTypingHeader';
import SocialLinks from '../Elements/SocialLinks';

export default (): JSX.Element => {
    return <div className="home">
        <div className="home-main">
            <div className="home-header">
                <AutoTypingHeader className="header home-header-header" text="Hi, I'm Ayden" />
                <SocialLinks className="home-socials" />
                <p className="home-bio">I'm a frontend web developer living in Boston, MA. I'm currently a CS undergrad student at UMass Boston.</p>
            </div>
        </div>
        <div className="home-sidebar">
            <div className="floating-head-container">
                <div className="media-and-description-container">
                    <div className='media media-grid-item semi-transparent'>
                        <Model3D width="100%" height="100%" />
                    </div>
                    <p className="subtitle-text media-description media-description-grid-item">
                        Yes, this is a 3d model of my head.
                    </p>
                </div>
            </div>
        </div>

    </div>
}
