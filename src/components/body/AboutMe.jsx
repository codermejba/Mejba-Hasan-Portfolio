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
              Hi, I'm MD. Mejba Hasan, a passionate Full-Stack Web Developer
              based in Dhaka, Bangladesh. I specialize in building dynamic,
              responsive, and user-friendly web applications using modern
              technologies like HTML5, CSS3, JavaScript (ES6+), React.js,
              Node.js, Express.js, MongoDB, and more. I enjoy turning complex
              problems into clean, efficient solutions—whether it’s on the
              frontend or the backend. From designing beautiful user interfaces
              with React and Tailwind CSS to creating powerful RESTful APIs with
              Node.js and MongoDB, I love building full-stack applications that
              not only look good but also perform well. Currently, I'm looking
              for an opportunity to apply my skills in a professional setting,
              collaborate with a team, and continue growing as a developer. 
            </p>
            <p className="text-white-50">
              I
              also offer affordable web solutions for businesses looking to
              build their online presence—helping you establish your brand and
              reach your audience effectively.
            </p>
          </div>
          <div className="contentRight col-lg-6 col-xl-5">
            <div className="ps-lg-4">
              <ul className="text-light list-style-2 list-style-light">
                <li>
                  <span className="fw-600 me-2">Name : </span>Mejba Hasan
                </li>
                <li>
                  <span className="fw-600 me-2">Email : </span>
                  mail.mejbahasan@gmail.com
                </li>
                <li>
                  <span className="fw-600 me-2">Age : </span>24
                </li>
                <li>
                  <span className="fw-600 me-2">From : </span>Dhaka, Bangladesh
                </li>
              </ul>
              <a
                href="./cv/MD-MEJBA-HASAN-CV.pdf"
                download="MD. MEJBA HASAN - CV.pdf"
              >
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
