import React from "react";
import styled from "styled-components";


function ButtonA({ text, value, onChange }) {
  const Cont = text;
  return (
    <>
      <StyledInput type="checkbox" id={text} name={text} value={value} onChange={onChange} />
      <StyledLabel htmlFor={text} Cont={Cont} />

    </>
  );
}

export default ButtonA;

const StyledLabel = styled.label`
  
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 15px; float: left;width: auto;
  margin-right:25px;
  padding-bottom:10px;
  white-space: pre-wrap;
  line-height: 36px;

  &:before {
    content:"  ${props => props.Cont}  ";
    width: auto;
    height: 44px;
    color: #FFAD31; 
    background-color: #E8E8E8;
    background-size: 21px 21px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 3px solid #FFAD31;
    text-align:center;
    font-size: 23px;
    font-weight: bold;
  }

  &:after {
    position: absolute;
    opacity: 0;
    content:"  ${props => props.Cont}  ";
    width: auto;
    height: 44px;
    border-radius: 20px;
    border: 3px solid #FFAD31;
    font-size: 23px;
    font-weight: bold;
    background-size: 21px 21px;
    background-position: 50%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-color: #FFAD31;
    color: #E8E8E8; 
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


/* width: auto;
height: 44px;
border-radius: 20px;
border: 3px solid #FF7B31;
font-size: 23px;
font-weight: bold;
 margin-right:20px;
 margin-bottom: 50px;
display: absolute;
cursor: pointer;
padding: 10px;
line-height: 1px;


color: #FF7B31; 
background-color: #E8E8E8; */


