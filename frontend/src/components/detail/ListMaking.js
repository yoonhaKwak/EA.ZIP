import React, { Component } from "react";
import ItemCard from "./ItemCard";
class Listpage extends Component {
  id = 1;
  state = {};
  render() {
    const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
        {Itemcard &&
          Itemcard.map((itemdata,) => {
            return (
              <ItemCard
                ImageUrl={itemdata.이미지주소}
                Category2={itemdata.카테고리2}
                Name={itemdata.매물명}
                Feature={itemdata.특징광고내용}
                Supply={itemdata.공급면적}
                Dedicated={itemdata.전용면적}
                Jeonse={itemdata.전세가}
                Monthly={itemdata.월세가}
                Trading={itemdata.매매가}
                Selling={itemdata.매물거래구분}
                Room={itemdata.방수}

              //이미지,특징광고내용,전세가,월세가,매매가,카테고리2,공급면적,
              //적용면적,매물거래구분(1:매매,2:전세,3:월세)

              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;