import { NavLink as RouterLink } from "react-router-dom";
import styled from 'styled-components'


const NavLink = styled(RouterLink)`
  ${({theme}) => `
    display: inline-block;
    padding: ${theme.space[2]}px ${theme.space[3]}px;;
    font-size: ${theme.fontSizes[3]}px;
    text-decoration: none;
    color: ${theme.colors.white};

    &.active {
      background: rgba(255,255,255,.25);
    }

    &:hover {
      background: rgba(255,255,255,.5);
    }
  `}
`

export default NavLink;
