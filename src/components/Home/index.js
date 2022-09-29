import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { faCss3, faHtml5, faJsSquare, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const nameArray = "im,".split("");
    const jobArray = "web developer.".split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _13`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    
                    <img src={LogoJ} alt='logoj'/>
                    
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={15} 
                        />
                    <br/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={jobArray} 
                        idx={22} 
                        />
                </h1>
                <h2>Front End / Back End Developer / Simpleng Pogi lang</h2>
                <Link to="/contact" className='contact-button'>CONTACT ME</Link>
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
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
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
        <Loader type='square-spin' color="#ffd700"/>
        </>
    )
}

export default Home;