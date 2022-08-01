import React from "react";
import styled from "styled-components";
import BlankHeart from "../../styles/img/Blank_Heart.svg";
import FillHeart from "../../styles/img/Fill_Heart.svg";

function Heart(onClick) {

  return (
    <>
      <StyledInput type="checkbox" onClick={onClick} />
      <StyledLabel />

    </>
  );
}

export default Heart;

const StyledLabel = styled.label`
align-items: center;
  user-select: none;
  float: left;
  cursor: pointer;
  white-space: pre-wrap;

  white-space: pre-wrap;
  z-index:100;

  &:before {

    content:url(${BlankHeart});
    width: 32px;
    height: 32px;


    
  }

  &:after {
  content:url(${FillHeart});
    width: 32px;
    height: 32px;

  }
`;

// visually-hidden
// https://www.a11yproject.com/posts/how-to-hide-content
const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0px;
  overflow: hidden;
  white-space: nowrap;
  width: 0px;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;
