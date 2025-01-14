import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../assets/Button";

const Hero = () => {
  return (
    <Main id="home">
      <div className="content">
        <h4 className="text-7 fw-medium">Welcome</h4>
        <h1 className=" fw-semibold text-16 py-lg-2">I am Mejba Hasan</h1>
        <h4 className="text-light text-5">based in Los Angeles, California.</h4>
        <Button className=" mt-4">Hire Me</Button>
      </div>
      <a className="view-content" href="#about">
        {/* adding scroll animation and it will rout to about me page*/}
        <span >
          <i className="fa fa-chevron-down"></i>
        </span>
      </a>
    </Main>
  );
};

// Keyframes for the slide animation
const slide = keyframes`
   0% {
    bottom: 60px;
    opacity: 0;
  }
  85% {
    bottom: 20px;
    opacity: 1;
    
  }
  
`;
const Main = styled.div`
  height: 100vh;
  color: var(--color-white) !important;
  

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    text-align: center;
    margin-top: -50px;
  }
  .view-content {
    position: absolute;
    height: 32px;
    left: 50%;
    bottom: 20px;
    animation: ${slide} 1.5s ease-in-out infinite;
    a {
      color: #fff;
      font-size: 20px;
      left: 50%;
      line-height: 32px;
      margin-left: -16px;
      position: absolute;
      text-align: center;
      width: 32px;
      z-index: 3;
    }
  }
`;

export default Hero;
