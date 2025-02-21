import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Services from './Services'

const MainBody = () => {
  return (
    <Mian className=''>
      <Hero/>
      <AboutMe/>
      <Services/>
    </Mian>
  )
}


const Mian=styled.div`
    max-width: 100vw;
    height: 100vh;
    position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./img/mejba-hasan-hero.jpg") center center/cover;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    opacity: 0.5;
    z-index: -1;
  }
    @media (min-width: 992px) {
      margin-left: 250px !important;
    }
`
export default MainBody
