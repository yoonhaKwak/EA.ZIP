
import React from "react";
import styled from "styled-components";
import pallette from "styles/pallette";
import DefaultImg from "../../styles/img/DefaultHomeImg.svg";
import Officetell from "../../styles/img/Officetell.svg";
import Villa from "../../styles/img/Villa.svg";
import Oneroom from "../../styles/img/Oneroom.svg";
import Tworoom from "../../styles/img/Tworoom.svg";
import Threeroom from "../../styles/img/Threeroom.svg";
import Housing from "../../styles/img/Housing.svg";


const Block = styled.div`
justify-content: space-between;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;

 ul{ 
  margin-left:-5rem;
  margin-top:-1rem;
  margin-bottom:1rem;}
li{
  list-style:none;

}
`;


const Table = styled.div`
width:100%;
min-width: 491px;
height:278px;

    background-color:white;


    img{
      padding-left:20px;
      padding-top:20px;
      padding-bottom:20px;
      width:238px;
      height:238px;
    }
.rightarea{
  float:right;
  display:fixed;
  width:234px;
  height:278px;
}
.leftarea{
  float:left;
  display:fixed;
  width:258px;
  min-width:258px;
  max-width:258px;
  height:278px;

}
    border-bottom:1px solid rgba(0,0,0,0.1);
`;
const ListFeature = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom:12px;
  margin-top:24px;
  .tag{
    position: relative;
  }
  img{
    width:45px;
    height:21px
  }
  img .officetell{
    width:59px;
    height:21px
  }
`;




function ItemCard({ key, ImageUrl, Category2, Name, Feature,
  Supply, Dedicated, Jeonse, Monthly, Trading, Selling, Room }) {

  return (
    <Block>
      <ul>
        <li className="component component--item_card" key={key}>



          <Table>
            <div className="leftarea">
              {ImageUrl === [] ? <img src={ImageUrl[0]} className="image--itemcard" alt="" />
                :
                <img src={DefaultImg} className="image--itemcard" alt="" />}

            </div>
            <div className="rightarea">
              <ListFeature>
                <div className="tag">
                  {{
                    빌라: <img src={Villa} alt="" />,
                    오피스텔: <img src={Officetell} className="officetell" alt="" />,
                    주택: <img src={Housing} alt="" />,
                    null: null
                  }[Category2]}
                  {{
                    1: <img src={Oneroom} alt="" />,
                    2: <img src={Tworoom} alt="" />,
                    3: <img src={Threeroom} alt="" />,
                    null: null
                  }[Room]}
                </div>
                {Name}
                {Feature}
                {Supply}/{Dedicated}
                {{ 1: "매매", 2: "전세", 3: "월세" }[Selling]}
              </ListFeature>
            </div>
          </Table>

        </li>
      </ul>

    </Block>

  );
}

export default ItemCard;