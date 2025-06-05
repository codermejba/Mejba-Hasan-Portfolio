import React from "react";
import styled from "styled-components";
import Button from "../../assets/Button";

const AboutMe = () => {
  const Experiance = [
    {
      title: "Years Experiance",
      value: "1",
    },
    {
      title: "Happy Clients",
      value: "2",
    },
    {
      title: "Projects Done",
      value: "10",
    },
    {
      title: "Get Awards",
      value: "5",
    },
  ];
  return (
    <Main id="about" className="secPadding bg-primary">
      <div className="container px-lg-5">
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            About Me
          </h1>
          <p
            className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white"
          >
            Know Me More
            <span className=""></span>
          </p>
        </div>
        <div className="content row">
          <div className="contentLeft col-lg-6 col-xl-7 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 text-white">
              I'm <span className="text-primary">Mejba Hasan</span>, a Web
              Developer
            </h2>
            <p className="text-white-50 ">
              I am a passionate Web Developer skilled in HTML, CSS,
              JavaScript, React, and Bootstrap. I enjoy building responsive and
              interactive websites that enhance user experiences. Currently, I
              am looking for an opportunity where I can apply my skills and grow
              as a developer.
            </p>
            <p className="text-white-50">
            I help you build brand for your business at an affordable price.
            </p>
          </div>
          <div className="contentRight col-lg-6 col-xl-5">
            <div className="ps-lg-4">
              <ul className="text-light list-style-2 list-style-light">
                <li>
                  <span className="fw-600 me-2">Name : </span>Mejba Hasan
                </li>
                <li>
                  <span className="fw-600 me-2">Email : </span>mail.mejbahasan@gmail.com
                </li>
                <li>
                  <span className="fw-600 me-2">Age : </span>25
                </li>
                <li>
                  <span className="fw-600 me-2">From : </span>Dhaka,
                  Bangladesh
                </li>
              </ul>
         <a href="./cv/MD-MEJBA-HASAN-CV.pdf" download="MD. MEJBA HASAN - CV.pdf">
              <Button className="mt-3">Download CV</Button>

</a>
            </div>
          </div>
        </div>
        {/* client & experiance */}
        <div className="row experiance my-5">
          {Experiance.map((item, index) => (
            <div className="borderEffect col-6 col-lg-3" key={index}>
              <div className="text-center">
                <h4 className=" text-16 text-white-50">
                  <span>{item.value}</span>+
                </h4>
                <p className="text-light">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section`
  .content {
    .contentLeft {
      p {
        text-align: justify;
      }
    }
  }
  .experiance {
    .borderEffect {
      border-bottom: 1px solid #6c757d;
      border-right: 1px solid #6c757d;
      &:last-child,
      &:nth-child(2) {
        border-right: none;
      }
      &:last-child,
      &:nth-child(3) {
        border-bottom: none;
      }

      @media (min-width: 992px) {
        border-bottom: none;
        border-right: 1px solid #6c757d;
        &:nth-child(2) {
          border-right: 1px solid #6c757d;
        }
      }
    }
  }
`;
export default AboutMe;
