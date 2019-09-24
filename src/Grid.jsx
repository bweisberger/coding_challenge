import React from "react";
import styled from "styled-components";

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Column = styled.div`
  float: left;
  width: 100%;
  justify-content: center;
  display: flex;

  @media only screen and (min-width: 1025px) {
    width: ${props => (props.span ? (props.span / 7) * 100 : "14.28")}%;
  }
`;

const Grid = props => {};
