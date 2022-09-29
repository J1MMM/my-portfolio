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
                <p>Eh paano kung hindi Hindi ka nakilala Siguro nakakulong pa din Sa nakaraan 'di makalaya</p>
                <p>Ang sarili dinadaya, yeah Naglalasing-lasing hindi pala kaya, yeah Ayokong magising nang 'di ka kasama Kung nandito ka sa tabi mas masaya sana</p>
                <p>Ngayon hinahanap ka Nasasaktan Buti na lang may alak pa Na nasasandalan Dinadaan ko lang sa amat Ang nararamdaman Para naman kahit papa'no gumaan</p>
            </div>
            {/* <div className='cube-cont'>
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
            </div> */}
        </div>
        <Loader type='square-spin' color="#ffd700"/>
        </>
    )
}

export default About;