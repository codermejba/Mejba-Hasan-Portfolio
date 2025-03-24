import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Main id="footer" className="secPadding bg-primary">
      <div className="container px-lg-5 text-light">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2025{" "}
              <a href="#home" className="fw-500 text-primary">
                Mejba Hasan
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6">
            <ul className=" d-flex gap-3 justify-content-center justify-content-lg-end">
              <li>
                  <a href="#" className="text-light">Terms &amp; Policy</a>
              </li>
              <li>
                  <a href="#" className="text-light"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.footer``;

export default Footer;
