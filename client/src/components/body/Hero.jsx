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
        <Button className=" mt-lg-3">Hire Me</Button>
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
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./img/mejba-hasan-hero.jpg") center center/cover;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: rgba(0,0,0,0.6);
    background: var(--color-primary);
    opacity: 0.5;
    z-index: -1;
  }

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
