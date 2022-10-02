import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import Slider from 'react-slick';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import projects from './projects.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quizzical from '../../assets/images/quizzical.png'
import tenzies from '../../assets/images/tenzies.png'

const Works = () => {
    const WorkArray = "My Works".split("");
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const projectElements = projects.map(item => {
        return(
                <div key={item.id} className='card'>
                    <div className='card-control'>
                        <div className='img-cont'>
                            <img src={require('../../assets/images/'+item.image+'.png')} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.URL} target="_blank">Visit Project</a>
                        <a className='source-btn' href={item.sourceUrl} target="_blank">Source Code</a>
                    </div>
                </div>
        )
    })
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return(
        <>
        <div className='work-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={WorkArray} 
                        idx={12}/>
                </h1>
                <div className='projects-cont'>
                    <Slider {...settings}>
                            {projectElements}
                    </Slider>
                </div>
            </div>
        </div>
        <Loader type='ball-pulse' color="#ffd700"/>
        </>
    )
}

export default Works;