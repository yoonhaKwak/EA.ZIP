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
          Itemcard.map((itemdata) => {
            return (
              <ItemCard
                ImageUrl={itemdata.이미지주소}
                Category2={itemdata.카테고리2}
                Name={itemdata.매물명}
              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;