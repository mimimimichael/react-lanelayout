import React from "react";
import styled from "styled-components";
import chroma from 'chroma-js'

export default styled("button")`
  width: 100%;
  cursor: pointer;
  background: ${({ active, theme: { textColor } }) =>
    active ? textColor : chroma(textColor).alpha(.125).hex()};
  color: ${({ active, theme: { backgroundColor } }) =>
    active ? backgroundColor : "inherit"};
    border: 0;
  padding: 1rem;
  font-size: ${({ theme, theme: { fontSizes } }) => {
    return fontSizes[2];
  }}px;
  min-width: 57px;
  font-weight: ${({ active }) => active ? 'bold': 'inherit' };
  &:focus {
    outline: 0;
  }
`;
