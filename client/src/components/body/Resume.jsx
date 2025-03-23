import React from "react";
import styled from "styled-components";

const Resume = () => {
  return (
    <Main className="secPadding bg-primary">
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
        <div className="row gx-5">
          <div className="col-md-6">
            <h2  className="text-6 fw-600 mb-4 text-white">My Education</h2>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2000 - 2004</p>
              <h3  className="text-5 text-white">Computer Science</h3>
              <p  className="text-primary">International University</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2005 - 2008</p>
              <h3  className="text-5 text-white">Bachelor Degree</h3>
              <p  className="text-primary">University of California</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2009 - 2012</p>
              <h3  className="text-5 text-white">Master Degree</h3>
              <p  className="text-primary">Harvard University</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2  className="text-6 fw-600 mb-4 text-white">My Experience</h2>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2012 - 2013</p>
              <h3  className="text-5 text-white">Jr. UI UX Designer</h3>
              <p  className="text-primary">Themeforest</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2014 - 2016</p>
              <h3  className="text-5 text-white">Jr. Product Designer</h3>
              <p  className="text-primary">Dribbble</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div  className="bg-white  rounded p-4 mb-4 bg-dark">
              <p  className="badge bg-primary text-2 fw-400">2017 - 2019</p>
              <h3  className="text-5 text-white">Product Designer</h3>
              <p  className="text-primary">Adobe</p>
              <p  className="mb-0 text-white-50">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div``;
export default Resume;
