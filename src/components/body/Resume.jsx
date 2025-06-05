import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../assets/Button";

const Resume = () => {
  // Define initial state for skills, all percentages start at 0 for animation
  const [skills, setSkills] = useState([
    { name: "Web Design", percentage: 0, targetPercentage: 85 },
    { name: "HTML/CSS", percentage: 0, targetPercentage: 95 },
    { name: "JavaScript", percentage: 0, targetPercentage: 80 },
    { name: "React JS", percentage: 0, targetPercentage: 70 },
    { name: "Angular Js", percentage: 0, targetPercentage: 10 },
    { name: "Bootstrap", percentage: 0, targetPercentage: 99 },
  ]);

  // Use a ref to target the main section element
  const sectionRef = useRef(null);
  // State to track if the animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through the entries to find the one for our section
        entries.forEach((entry) => {
          // If the section is intersecting (visible) and hasn't animated yet
          if (entry.isIntersecting && !hasAnimated) {
            // Update the skill percentages to their target values
            setSkills((prevSkills) =>
              prevSkills.map((skill) => ({
                ...skill,
                percentage: skill.targetPercentage,
              }))
            );
            // Set hasAnimated to true to prevent re-running the animation
            setHasAnimated(true);
            // Disconnect the observer once the animation has been triggered
            observer.disconnect();
          }
        });
      },
      {
        // Options for the observer
        root: null, // Observe the viewport
        rootMargin: "0px", // No margin around the root
        threshold: 0.5, // Trigger when 50% of the target is visible
      }
    );

    // If the section ref exists, start observing it
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Dependency array: re-run if hasAnimated changes (though it only changes once)

  return (
    // Attach the ref to the main section element
    <Main id="resume" className="secPadding bg-secondary" ref={sectionRef}>
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

        {/* skills */}
        <h2 className="text-6 fw-600 mt-4 mb-4 text-white">My Skills</h2>
        <div className="row gx-lg-5">
          {skills.map((skill, index) => (
            <div className="col-md-6" key={index}>
              <p className="fw-500 text-start mb-2 text-light">
                {skill.name}{" "}
                <span className="float-end">{skill.targetPercentage}%</span>
              </p>
              <div className="progress progress-sm mb-4 bg-dark">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.targetPercentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: `${skill.percentage}%`,
                    transition: "width 2s ease-out", // Smooth transition for the animation
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* CV */}
        <div className="text-center mt-5">
         <a href="./cv/MD-MEJBA-HASAN-CV.pdf" download="MD. MEJBA HASAN - CV.pdf">
           <Button >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </Button>
         </a>
        </div>
      </div>
    </Main>
  );
};



const Main = styled.section``;

export default Resume;