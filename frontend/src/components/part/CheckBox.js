import React from "react";
import styled from "styled-components";
import CheckedBox from "../../styles/img/CheckedBox.svg";

function Checkbox({ text }) {
    return (
        <>
            <StyledInput type="checkbox" id={text} name={text} />
            <StyledLabel htmlFor={text}>
                <StyledP>{text}</StyledP>
            </StyledLabel>
        </>
    );
}

export default Checkbox;

const StyledLabel = styled.label`
  
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;
  font-size: 15px; float: left; width: 33.33%;
  

  &:before {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    background-size: 21px 21px;
    box-sizing: border-box;
    border: 0.23rem solid #FF9431;
    border-radius: 3px;
  }

  &:after {
    position: absolute;
    opacity: 0;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid transparent;
    border-radius: 3px;
    background-image: url(${CheckedBox});
    background-size: 25px 25px;
    background-position: 50%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-color: #FF9431;
  }
`;

// visually-hidden
// https://www.a11yproject.com/posts/how-to-hide-content
const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

const StyledP = styled.p`
  margin-left: 0.5rem;
`;