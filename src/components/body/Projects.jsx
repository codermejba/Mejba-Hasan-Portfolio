import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Main id="services" className="secPadding bg-primary">
      <div className="container">
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            Projects
          </h1>
          <p
            className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white"
          >
            What I've Built
            <span></span>
          </p>
        </div>
        <div className="projects">
          <div className="">
            <div className=" row">
              <div className=" col-lg-6 p-0 slider">
                <img
                  src="projects/realstate/realstate-desktop-view.PNG"
                  alt="desktop"
                  className="img-fluid"
                />
                <div className=" d-flex align-items-center justify-content-center  text-light">
                  <a 
                  href="https://realestate-copy.vercel.app/"
                  target="_blank" // <-- Opens in a new tab
                  rel="noopener noreferrer" // <-- Security best practice for target="_blank"
                  >
                   
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section`
  .slider {
    height:300px;
    overflow: hidden;
    position: relative;

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.606);
      opacity: 0;
      pointer-events: none; /* Makes the overlay not capture mouse events */
      z-index: 10; /* Ensures it appears above the image */
      box-sizing: border-box; /* Includes padding in the element's total width and height */
    }
    img {
      transition: transform 1.5s linear;
      transform: translateY(0%);
      display: block;
    }
    a {
      &:hover {
        cursor: pointer;
        color: var(--color-secondary);
      }
    }
    &:hover {
      img {
        cursor: pointer;
        transition: transform 10s linear;
        transform: translateY(-81%);
      }

      div {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;
export default Projects;
