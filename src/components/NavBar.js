import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system'
import tag from 'clean-tag'

const NavBar = styled(tag)`
  background-color: ${({theme}) => theme.interface.background};
  ${space}
`

export default NavBar;
