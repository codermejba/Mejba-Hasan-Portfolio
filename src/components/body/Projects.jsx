import { Link } from "react-router-dom";
import Button from "../../assets/Button";
import styled from "styled-components";

const Projects = () => {
  return (
    <Main id="projects" className="secPadding bg-primary">
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
          <div className=" container">
            <div className=" row gap-5 gap-md-3 align-items-center justify-content-center">
              <div className=" col-lg-5 p-0">
                <div className=" slider">
                  <img
                    src="projects/hotel-booking-desktop-view.png"
                    alt="desktop"
                    className="img-fluid"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center  text-light">
                    <a
                      href="https://hotel-booking-mejba-hasans-projects.vercel.app/"
                      target="_blank" // <-- Opens in a new tab
                      rel="noopener noreferrer" // <-- Security best practice for target="_blank"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
                <div className=" bg-light  d-flex justify-content-between">
                  <Link
                    to="/projects/hotel-booking"
                    className="fw-700 text-dark p-3"
                  >
                    Hotel Booking
                  </Link>
                  <a
                    href="https://hotel-booking-mejba-hasans-projects.vercel.app/"
                    target="_blank" // <-- Opens in a new tab
                    rel="noopener noreferrer" // <-- Security best practice for target="_blank"
                    className="fw-700 text-dark p-3"
                  >
                    Live
                  </a>
                </div>
              </div>
              <div className=" col-lg-5 p-0">
                <div className=" slider">
                  <img
                    src="./projects/realstate-desktop-view.PNG"
                    alt="desktop"
                    className="img-fluid"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center  text-light">
                    <a
                      href="https://realestate-copy-mejba-hasans-projects.vercel.app/"
                      target="_blank" // <-- Opens in a new tab
                      rel="noopener noreferrer" // <-- Security best practice for target="_blank"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
                <div className=" bg-light  d-flex justify-content-between">
                  <Link
                    to="/projects/realstate"
                    className="fw-700 text-dark p-3"
                  >
                    Real Estate Service
                  </Link>
                  <a
                    href="https://realestate-copy-mejba-hasans-projects.vercel.app/"
                    target="_blank" // <-- Opens in a new tab
                    rel="noopener noreferrer" // <-- Security best practice for target="_blank"
                    className="fw-700 text-dark p-3"
                    
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
              <Link to="/projects">
                <Button>See All Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section`
  .slider {
    height: 250px;
    overflow: hidden;
    position: relative;

    .overlay {
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
    }
    a {
      font-weight: 700;
      padding: 10px 20px;
      border: 1px solid var(--color-white);

      &:hover {
        cursor: pointer;
        color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
      }
    }
    
    &:hover {
      img {
        cursor: pointer;
        transition: transform 10s linear;
        transform: translateY(-88.5%);
      }

      .overlay {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;
export default Projects;
