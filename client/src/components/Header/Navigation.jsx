import React from "react";
import styled from "styled-components";
const Navigation = () => {
  return (
    <>
      <Main className=" p-3 pb-2 d-lg-flex">
        <div className="brand mt-4">
          <img src="./img/mejba-hasan-logo.jpg" alt="Logo" className=" mb-2" />
          <h4>Mejba Hasan</h4>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#">What I Do</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="socialIcons">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Main>
      <MobNav className=" position-fixed">
        <div className=" h-100 d-flex justify-content-between align-items-center">
          <div className="brand">
            <h4 className=" text-white">Mejba Hasan</h4>
          </div>
          <div className="MobSocialIcons d-block">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </MobNav>
    </>
  );
};
const Main = styled.header`
  display: none;
  min-height: 100vh;
  width: 250px;
  background: var(--color-primary);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .brand {
    img {
      width: 160px;
      height: 160px;
      border-radius: 5rem !important;
      padding: 0.5rem;
      background: var(--color-bg1);
    }
    h4 {
      color: var(--color-white);
    }
  }
  .menu {
    ul {
      padding: 0 !important;
      li {
        text-align: center;
        padding: 8px 20px;
        a {
          color: var(--font-color);
          &:hover {
            color: var(--color-secondary) !important;
            transition: 0.5s ease;
          }
        }
      }
    }
  }
  .socialIcons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    a {
      color: var(--color-white);
      font-size: 1rem;
      &:hover {
        color: var(--color-secondary) !important;
        transition: 0.3s ease;
      }
    }
  }
`;
const MobNav = styled.header`
  height: 60px;
  width: 100%;
  padding: 5px 15px;
  background: black;
  z-index: 999;
  h4 {
    color: var(--color-secondary);
    white-space: nowrap;
  }
  .MobSocialIcons {
   
    a {
      padding: 2px 8px;
      color: var(--logo-color);
      font-size: 1rem;
      &:hover {
        color: var(--color-secondary) !important;
        transition: 0.3s ease;
      }
    }
  }
  @media (min-width: 992px) {
    display: none !important;
  }
`;
export default Navigation;
