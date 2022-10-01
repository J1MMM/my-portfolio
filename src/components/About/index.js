import { faCss3, faHtml5, faJsSquare, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    const aboutTitleArray = "About me".split("");
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={aboutTitleArray}
                        idx={12} /* 1.5sec deley */
                        />
                </h1>
                <p>Ambitious web developer with over 7 months of experience in front-end specially for aesthetic and responsive website design.</p>
                <p>I'm naturally curious, interested to learn and quietly confident to improve my skills by building real projects</p>
                <p>I work on personal projects using advanced and updated technologies to enhance my skill set, also currently taking bachelor's degree major in web and game development </p>
            </div>
            <div className='cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPhp} color="#7377AD"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#539E43"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-pulse' color="#ffd700"/>
        </>
    )
}

export default About;