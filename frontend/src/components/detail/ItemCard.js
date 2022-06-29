import React from "react";
import styled from "styled-components";
import DefaultImg from "../../styles/img/DefaultHomeImg.svg";

// 0:월세 ,1:매매, 2:전세
function ItemCard({ key, ImageUrl, Category2,Name }) {
    return (
      <li className="component component--item_card" key={key}>
        <img src={ImageUrl} className="image--itemcard" alt="" />
        <p>
           <span className="text--brand">{Category2}</span>
        </p>
        <p> {Name}</p>
      </li>
    );
  }

export default ItemCard;