import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  color: white;
  position: relative;
  
  &:hover {
    transition: .25s ease-in;
    transform: translate3d(0,0,0) scale(1.125) !important;
    
    div {
      display: block;
    }
  }
`;

export default Container