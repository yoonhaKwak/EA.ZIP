import axios from "axios";
import React, { useState, createContext } from "react";
import styled from "styled-components";

export const OptionContext = createContext();
function OptionButton({ Id, value, A, B, parentFunction }, props) {
  const [checkedItems, setCheckedItems] = useState(new Set([Id, "1"]));
  const checkedItemHandler = (isChecked) => {
    if (isChecked) {
      checkedItems.delete(`1`);
      checkedItems.add(`0`);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(`0`)) {
      checkedItems.delete(`0`);
      checkedItems.add(`1`);
      setCheckedItems(checkedItems);
    }
  };
  const [bChecked, setChecked] = useState(0);


  const AA = A;
  const BB = B;
  const OPtion = styled.div`
  input{
    display:none;
  }

  label{

    cursor: pointer;
  }
input+label{
  content:url(${BB})
}
input:checked+label{
  content:url(${AA})
}
img{

  padding:0;
}
`;
  const AAA = Array.from(checkedItems);
  /*   console.log(AAA) */
  /* props.parentFunction(AAA); */
  const checkHandler = ({ target }, props) => {
    setChecked(!bChecked);
    checkedItemHandler(target.checked);
    parentFunction(AAA);
  };
  return (

    <OPtion  >
      <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} id={Id} A={A} B={B} />
      <label htmlFor={Id} AA={AA} BB={BB}><img src={BB} alt="" /></label>


    </OPtion>

  );
}

export default OptionButton;

