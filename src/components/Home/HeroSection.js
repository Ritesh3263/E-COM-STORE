import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import whatwedo from "../../Assets/what-we-do.svg"
import how from "../../Assets/how.svg"
import why from "../../Assets/why.svg"

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container py-12">
        <div className="grid grid-two-column align-items-center whatwedo">
           <div className="hero-section-image">
            <figure>
              <img
                src={whatwedo} 
                alt="hero-section-hoto"
                className="img-style"
              />
            </figure>
          </div>
          <div className="hero-section-data">
            <h2 className="intro-data heading">WHAT <span className='color-primary'>DO</span> WE <span className='color-primary'>DO</span> ?</h2>
            <p className='pb-4 para'>
              We provide high quality clothing solutions / uniforms for your organization that are highly comfortable according to all season - Indian weathers so that your students are less worried about their comfort zone and more about their academics.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid grid-two-column align-items-center howwedo">
          <div className="hero-section-data">
            <h2 className="intro-data heading">HOW <span className='color-primary'>DO</span> WE <span className='color-primary'>DO</span> IT ?</h2>
            <p className='pb-4 para'>
            We have tied up with Industry leading and top manufacturers across the nation to provide the best in class fabrication solutions to our clients, Fabrics with accurate GSM quality and Thread Count so that the uniforms are comfortable enough for Students/ Employees / Staff that they can focus on their work more efficiently. 
            </p>
          </div>
           <div className="hero-section-image">
            <figure>
              <img
                src={how} 
                alt="hero-section-hoto"
                className="img-style"
              />
            </figure>
          </div>
          
        </div>
      </div>
      <div className="container py-12">
        <div className="grid grid-two-column align-items-center whyus">
           <div className="hero-section-image">
            <figure>
              <img
                src={why} 
                alt="hero-section-hoto"
                className="img-style"
              />
            </figure>
          </div>
          <div className="hero-section-data">
            <h2 className="intro-data heading"> WHY<span className='color-primary'> US</span> ?</h2>
            <p className='pb-4 para'>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>1. Correct amount of <span className='color-primary fw-600'>GSM</span> quality Fabric.</li>
                <li>2. Correct amount of <span className='color-primary fw-600'>Thread-Count</span> Required for Indian seasons.</li>
                <li>3. High-Quality <span className='color-primary fw-600'>Manufacturing</span> process and Equipments.</li>
                <div className='d-flex'>
                <li>4 </li><li>. Direct Delivery from Manufacturers leaving no margins of retailers which means ultimately you get the product in <span className='color-primary fw-600'>lowest prices</span> in industry.</li>
                </div>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding-bottom: 12rem;
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: 576px) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection
