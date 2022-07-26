import "../../styles/css/Buttonstyles.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Tbtn = styled.button`
    width: auto; height: 44px; border-radius: 20px; border: 3px solid #FF7B31; background-color: #E8E8E8;
    font-size: 23px; font-weight: bold; color: #FF7B31; margin-right: 20px; margin-bottom: 50px;
    display: absolute; cursor: pointer; padding: 10px; line-height: 1px;
`;

const Sbtn = styled.button`
width:240px; height: 44px; border-radius: 20px; border: none; background-color: #FF9431; font-size: 25px;
  font-weight: bold; color: white; margin: 10px 20px 20px 820px;  display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;

const ButtnonTest = () => {

    const formData = [
        { id: 1, name: "딸기" },
        { id: 2, name: "바나나" },
        { id: 3, name: "피자" },
        { id: 4, name: "불고기" },
        { id: 5, name: "김치" },
        { id: 6, name: "볶음밥" },
        { id: 7, name: "쌀국수" },
        { id: 8, name: "육개장" },
        { id: 9, name: "커피" }
    ]

    const [isToggle, setIsToggle] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Set());

    const checkHandler = ({ target }) => {
        setIsToggle(!isToggle);
        checkedItemHandler(target.parentNode, target.value, target.checked);
        console.log(target.parentNode, target.value, target.checked);
    };

    const checkedItemHandler = (box, id, isToggle) => {
        if (isToggle) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#FF7B31";
            box.style.color = "#E8E8E8";
        } else if (!isToggle && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#E8E8E8";
        }
        console.log(checkedItems);
        return checkedItems;
    };
    return (
        <form style={{ width: '450px', display: 'inline-block', margin: '186px 110px -35px 61px', textAlign: '-webkit-auto', zIndex: '11' }}>
            {formData.map((item) => (
                <label key={item.id} className="innerBox">
                    <input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => checkHandler(e)}
                    />
                    <div>{item.name}</div>
                </label>
            ))}
            <Sbtn>추천받기</Sbtn>
        </form>
    );
};
export default ButtnonTest;