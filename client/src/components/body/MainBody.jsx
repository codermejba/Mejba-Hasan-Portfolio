import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import AboutMe from './AboutMe'

const MainBody = () => {
  return (
    <Mian className=''>
      <Hero/>
      <AboutMe/>
    </Mian>
  )
}


const Mian=styled.div`
    max-width: 100vw;
    height: 100vh;
    
    @media (min-width: 992px) {
      margin-left: 250px !important;
    }
`
export default MainBody
