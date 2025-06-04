import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../assets/Button";

const Hero = () => {
  const [typing, setTyping] = useState('');
  const [arryindex, setarryindex] = useState(0);

  useEffect(() => {
    const text = ["Mejba Hasan", "A React Developer","A Full Stack Developer", "A MERN Developer"];
    let i = -1;

    const typeInterval = setInterval(() => {
      if (i < text[arryindex].length - 1) {
        i++;
        setTyping((prev) => prev + text[arryindex][i]);
      }
    }, 70);

    const resetTimeout = setTimeout(() => {
      clearInterval(typeInterval);
      deleteText();
    }, 4000);

    const deleteText = () => {
      const deleteInterval = setInterval(() => {
        if (i >= 0) {
          setTyping((prev) => prev.slice(0, -1));
          i--;
        } else {
          clearInterval(deleteInterval);
          setarryindex((prevIndex) => (prevIndex + 1) % text.length);
        }
      }, 100);
    };

    // Cleanup the intervals and timeout when the component unmounts
    return () => {
      clearInterval(typeInterval);
      clearTimeout(resetTimeout);
    };
  }, [arryindex]);
  return (
    <Main id="home">
      <div className="content">
        <h4 className="text-7 fw-medium mb-3">Welcome</h4>
        <h1 className=" fw-semibold text-16">I am <span className="text-primary">{typing}</span></h1>
        <h4 className="text-light text-5 mt-3">Live in Dhaka, Bangladesh.</h4>
        <Button className=" mt-4"><a href="#contact">Hire Me</a></Button>
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
const Main = styled.section`
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
