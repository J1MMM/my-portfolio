import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolderOpen, faGear, faHome, faHomeAlt, faHomeLgAlt, faHomeUser, faHouse, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
    return(
        <div className='nav-bar'>
        <Link style={{ textDecoration: 'none' }} to="/my-portfolio/">
            <img className='logo' src={LogoJ} alt='logo' />
            <p>Jim</p>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/my-portfolio/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4d'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/my-portfolio/skills">
                <FontAwesomeIcon icon={faGear} color='#4d4d4d'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/my-portfolio/projects">
                <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4d'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/my-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href='https://www.facebook.com/jimuel.baraero' target="_blank">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </li>
            <li>
                <a href='https://github.com/J1MMM' target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/jimuel-baraero-b49628243/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
        </ul>
    </div>
    )
} 

export default Sidebar;