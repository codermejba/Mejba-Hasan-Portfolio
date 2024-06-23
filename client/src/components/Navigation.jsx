import React from "react";
import styled from "styled-components";
const Navigation = () => {
  return (
    <Main className=" p-3 pb-2">
      <div className="brand mt-4">
        <img src="./img/mejba-hasan-logo.jpg" alt="Logo" className=" mb-2" />
        <h4>Mejba Hasan</h4>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
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
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </Main>
  );
};
const Main = styled.header`
  min-height: 100vh;
  width: 250px;
  background: var(--color-primary);
  display: flex;
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
export default Navigation;
