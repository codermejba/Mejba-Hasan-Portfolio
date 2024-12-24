import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Main id="about">
      <div className="container">
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            About Me
          </h1>
          <p className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white">
            Know Me More
            <span className=""></span>
          </p>
        </div>
        <div className="content row g-5 ">
          <div className="contentLeft col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 text-white">I'm <span className="text-primary">Mejba Hasan</span>, a Web Developer</h2>
            <p className="text-white-50 ">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              
            </p>
            <p className="text-white-50">Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.</p>
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
                  <span className="fw-600 me-2">From : </span>Los Angeles, California
                </li>
                <li>
                  <span className="fw-600 me-2">Phone : </span>+(123) 456-7890
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section`
  padding: 4.5rem 0;
  min-height: 100vh;
  background-color: #212529 !important;
  .title {
    position: relative;
    .aboutTitle {
      font-size: calc(1.95rem + 8.4vw) !important;
      line-height: 1;
      opacity: 0.1;
      color: #6c757d !important;
    }
    p {
      
      span {
        width: 82px;
        display: block;
        background-color: var(--color-secondary);
        height: 2px;
        margin: 0 auto;
      }
    }
  }
  .content{
    .contentLeft{
      p{
        text-align: justify;
      }
    }
  }
`;
export default AboutMe;
