import axios from "axios";
import React, { useState, createContext } from "react";
import styled from "styled-components";









function OptionButton({ Id, value, A, B }, props) {
  const [checkedItems, setCheckedItems] = useState(new Set([Id, "0"]));
  const checkedItemHandler = (isChecked) => {
    if (isChecked) {
      checkedItems.delete(`0`);
      checkedItems.add(`1`);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(`1`)) {
      checkedItems.delete(`1`);
      checkedItems.add(`0`);
      setCheckedItems(checkedItems);
    }
  };
  const [bChecked, setChecked] = useState(0);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.checked);
  };

  const AA = A;
  const BB = B;
  const Cafe = styled.div`
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
  console.log(AAA)
  const submit = () => {
    props.propFunction(AAA)
  }
  return (

    <Cafe>
      <input type="checkbox" onClick={submit} checked={bChecked} onChange={(e) => checkHandler(e)} id={Id} value={value} A={A} B={B} />
      <label htmlFor={Id} AA={AA} BB={BB}><img src={BB} alt="" /></label>


    </Cafe>

  );
}

export default OptionButton;

