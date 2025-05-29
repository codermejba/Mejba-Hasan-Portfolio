import React from "react";
import styled from "styled-components";
import Button from "../../assets/Button";

const Resume = () => {
  return (
    <Main id="resume" className="secPadding bg-primary">
      <div className="container px-lg-5">
        <div className="title mb-5">
          <h1 className="aboutTitle fw-600 text-uppercase text-center prevent-select">
            Summary
          </h1>
          <p
            className="text-9 fw-600 lh-base text-nowrap
          text-center position-absolute top-50 start-50 translate-middle text-white"
          >
            Resume
            <span></span>
          </p>
        </div>
        {/* <div className="row gx-lg-5">
         
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">My Education</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2000 - 2004</p>
              <h3 className="text-5 text-white">Computer Science</h3>
              <p className="text-primary">International University</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2005 - 2008</p>
              <h3 className="text-5 text-white">Bachelor Degree</h3>
              <p className="text-primary">University of California</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2009 - 2012</p>
              <h3 className="text-5 text-white">Master Degree</h3>
              <p className="text-primary">Harvard University</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 text-white">My Experience</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2012 - 2013</p>
              <h3 className="text-5 text-white">Jr. UI UX Designer</h3>
              <p className="text-primary">Themeforest</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2014 - 2016</p>
              <h3 className="text-5 text-white">Jr. Product Designer</h3>
              <p className="text-primary">Dribbble</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-dark">
              <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
              <h3 className="text-5 text-white">Product Designer</h3>
              <p className="text-primary">Adobe</p>
              <p className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div> */}
        {/*skills */}
        <h2 className="text-6 fw-600 mt-4 mb-4 text-white">My Skills</h2>
        <div className="row gx-lg-5">
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Web Design <span className="float-end">85%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              HTML/CSS <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              JavaScript <span className="float-end">80%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              React JS <span className="float-end">70%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Angular Js <span className="float-end">10%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" fw-500 text-start mb-2 text-light">
              Bootstrap <span className="float-end">99%</span>
            </p>
            <div className="progress progress-sm mb-4 bg-dark">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>
        </div>
        {/* CV */}
        <div className="text-center mt-5">
          <Button>
            Download CV
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </Button>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.section``;
export default Resume;
