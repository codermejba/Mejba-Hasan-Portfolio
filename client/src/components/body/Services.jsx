import styled from "styled-components";

const Services = () => {
  return (
    <Main id="services" className="secPadding bg-secondary">
      <div className="container">
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            Services
          </h1>
          <p
            className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white"
          >
            What I Do
            <span></span>
          </p>
        </div>
        <div className="services">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
            <div className="col-md-6 p-3 d-flex ">
              <div className="icon ">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div className="colContent px-4">
                <h4>Graphic Design</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex">
              <div className="icon">
                <i className="fa-solid fa-desktop"></i>
              </div>
              <div className="colContent px-4">
                <h4>Web Design</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex">
              <div className="icon">
                <i className="fa-solid fa-pen-ruler"></i>
              </div>
              <div className="colContent px-4">
                <h4>UI/UX Design</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex">
              <div className="icon">
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <div className="colContent px-4">
                <h4>App Design & Develop</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex">
              <div className="icon">
                <i className="fa-solid fa-chart-area"></i>
              </div>
              <div className="colContent px-4">
                <h4>Business Analysis</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex">
              <div className="icon">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div className="colContent px-4">
                <h4>SEO Marketing</h4>
                <p className=" text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit nihil dignissimos.
                </p>
              </div>
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
  
  i {
    color: var(--color-secondary);
    font-size: 30px;
  }
  h4 {
    color: var(--color-white);
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 70px;
    width: 70px;
    background-color: #212529;
    border-radius: 10%;
  }
`;
export default Services;
