import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

const MainBody = () => {
  return (
    <Mian>
      <Hero/>
    </Mian>
  )
}


const Mian=styled.body`
    margin-left: 250px !important;
    max-width: 100vw;
    height: 100vh;
`
export default MainBody
