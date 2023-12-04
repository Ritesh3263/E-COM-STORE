import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import {Helmet} from "react-helmet";
// import url from "./carouselScript"
import img1 from "../../Assets/school-1.jpg"
import img2 from "../../Assets/school-2.jpg"
import img3 from "../../Assets/school-3.jpg"
import dress1 from "../../Assets/dress-1.jpg"
import dress2 from "../../Assets/dress-2.jpg"
import dress3 from "../../Assets/dress-3.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CarouselSection = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    // useEffect(() => {
    //     const head = document.querySelector("head");
    //     const script = document.createElement("script");

    //     script.setAttribute("src", url);
    //     head.appendChild(script);

    //     return () => {
    //         head.removeChild(script);
    //     };
    //     }, [url]);






  return (
    <>
    <div className='section_carousel_parent'>
        <h2 className='text-center pt-5 
        heading-white heading'>OUR CLIENTS</h2>
        <div className="wrapper section_carousel">
            <i ><FaChevronLeft id="left" className="fa-solid fa-angle-left"/></i>
            
            {/* <ul className="carousel"> */}
            <Carousel className="carousel" responsive={responsive} infinite={true} autoPlay={true} >
                <li className="card">
                <h2>Blanche Pearson</h2>
                <div className="img d-flex">
                    <img src={img1} alt="img" draggable="false"/>
                    <img src={dress1} alt="img" draggable="false"/>
                </div>
                
                
                </li>
                <li className="card">
                <h2>Joenas Brauers</h2>
                <div className="img d-flex">
                    <img src={img2} alt="img" draggable="false"/>
                    <img src={dress2} alt="img" draggable="false"/>
                </div>
                </li>
                <li className="card">
                <h2>Lariach French</h2>
                <div className="img d-flex">
                    <img src={img3} alt="img" draggable="false"/>
                    <img src={dress3} alt="img" draggable="false"/>
                </div>
                </li>
                <li className="card">
                <h2>Blanche Pearson</h2>
                <div className="img d-flex">
                    <img src={img1} alt="img" draggable="false"/>
                    <img src={dress1} alt="img" draggable="false"/>
                </div>
                
                
                </li>
                <li className="card">
                <h2>Joenas Brauers</h2>
                <div className="img d-flex">
                    <img src={img2} alt="img" draggable="false"/>
                    <img src={dress2} alt="img" draggable="false"/>
                </div>
                </li>
                <li className="card">
                <h2>Lariach French</h2>
                <div className="img d-flex">
                    <img src={img3} alt="img" draggable="false"/>
                    <img src={dress3} alt="img" draggable="false"/>
                </div>
                </li>
                </Carousel>
            {/* </ul> */}
            
            <i ><FaChevronRight id="left" className="fa-solid fa-angle-left"/></i>
        </div>
    </div>
    {/* <Helmet>
        <script src="./carouselScript.js" crossorigin="anonymous" async />
    </Helmet> */}
    </>
  )
}

export default CarouselSection
