
import {FaGithub, FaInstagramSquare} from 'react-icons/fa';
import Model3D from '../Elements/3D/Model3D';
import AutoTypingHeader from '../Elements/AutoTypingHeader';
import SocialLinks from '../Elements/SocialLinks';

export default (): JSX.Element => {
    return <div className="home">
        <div className="home-main">
            <div className="home-header">
                <AutoTypingHeader className="home-header-header" text="hi, i'm ayden" />
                <SocialLinks className="home-socials" />
                <p className="home-bio">I'm a frontend web developer living in Boston, MA. I'm currently a CS undergrad student at UMass Boston.</p>
                <div className="home-body-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div className="home-sidebar">
            <div className="floating-head-container">
                <div className="media-and-description-container">
                    <div className='media media-grid-item semi-transparent'>
                        <Model3D width="500px" height="500px" />
                    </div>
                    <p className="subtitle-text media-description media-description-grid-item">
                        Yes, this is a 3d model of my head.
                    </p>
                </div>
            </div>
        </div>

    </div>
}
