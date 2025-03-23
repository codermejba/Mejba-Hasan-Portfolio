import React from "react";
import styled from "styled-components";
import Button from "../../assets/Button";

const AboutMe = () => {
  const Experiance = [
    {
      title: "Years Experiance",
      value: "10",
    },
    {
      title: "Happy Clients",
      value: "250",
    },
    {
      title: "Projects Done",
      value: "650",
    },
    {
      title: "Get Awards",
      value: "38",
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
          <div className="contentLeft col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 text-white">
              I'm <span className="text-primary">Mejba Hasan</span>, a Web
              Developer
            </h2>
            <p className="text-white-50 ">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-white-50">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="contentRight col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="text-light list-style-2 list-style-light">
                <li>
                  <span className="fw-600 me-2">Email : </span>Mejba Hasan
                </li>
                <li>
                  <span className="fw-600 me-2">Age : </span>25
                </li>
                <li>
                  <span className="fw-600 me-2">From : </span>Los Angeles,
                  California
                </li>
                <li>
                  <span className="fw-600 me-2">Phone : </span>+(123) 456-7890
                </li>
              </ul>
              <Button className="mt-3">Download CV</Button>
            </div>
          </div>
        </div>
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
      &:last-child, &:nth-child(2) {
        border-right: none;
      }
      &:last-child, &:nth-child(3) {
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
