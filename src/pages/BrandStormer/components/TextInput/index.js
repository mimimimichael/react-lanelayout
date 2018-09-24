import React from "react";
import styled from "styled-components";
import chroma from 'chroma-js'

export default styled("input")`
  width: 100%;
  background: ${({ active, theme: { textColor } }) =>
    active ? textColor : chroma(textColor).alpha(.125).hex()};
  color: inherit;
  border: 0;
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[3]}px;
  height: 3.125rem;
  padding: 0 1rem;

  &:focus {
    background: ${({ active, theme: { textColor } }) =>
      active ? textColor : chroma(textColor).alpha(.25).hex()};
  }


  &:focus {
    outline: 0;
  }
`;
