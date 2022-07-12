import React, { useState } from "react";
import styled from "styled-components";
import pallette from "styles/pallette";
import DefaultImg from "../../styles/img/DefaultHomeImg.svg";
import Officetell from "../../styles/img/Officetell.svg";
import Villa from "../../styles/img/Villa.svg";
import Oneroom from "../../styles/img/Oneroom.svg";
import Tworoom from "../../styles/img/Tworoom.svg";
import Threeroom from "../../styles/img/Threeroom.svg";
import Housing from "../../styles/img/Housing.svg";
import ItemDetail2 from 'components/part/ItemDetail2';
import LeftArrow from '../../styles/icons/Left.svg';
import RightArrow from '../../styles/icons/Right.svg';
import Jeonseimg from '../../styles/img/Jeonse.svg';
import Monthlyimg from '../../styles/img/Monthly.svg';
import Tradingimg from '../../styles/img/Trading.svg';





const Block = styled.div`
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
:hover{
  background-color:#f9f9f9;
}

`;
const ListFeature = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom:12px;
  margin-top:24px;
 padding-left:12px;
 word-break:keep-all;

  .default{
    width:45px;
    height:21px;
    padding: 0 8px 0 0;
  }
  .roomdefault{
    width:45px;
    height:21px;
    padding:  0 0 0 0;
  }
  .officetell{
    width:66px;
    height:21px;
    padding: 0 8px 0 0 ;
  }
  .threeroom{
    width:66px;
    height:19px;
    padding:  0 0 0 0;
  }
  .list{
width:220px;
height:100%
  }
  .list .bold{
    font-weight: 700;
    font-size:25px;
    font-size:1vw;
  }


`;








function ItemCard({ key, ImageUrl, Category2, Feature,
    Supply, Dedicated, Jeonse, Monthly, Trading, Selling, Room, Deposit, SupplyP, Addr1, Addr2, LongFeature }) {



    /*--------------------------------------------[나만이 아는 코드임 뚜방뚜방]------------------------------------------*/



    let price = (Jeonse + Monthly + Trading).toFixed(0);
    let result = (Trading / SupplyP).toFixed(0);
    let supply = (Supply).toFixed(0);
    let dedicated = (Dedicated).toFixed(0);

    let pricel;
    let realprice;
    let pricem;

    if (Selling === 3) {
        realprice = (price + "만").toString(); //월세일 경우
    }
    else {  //월세가 아닌경우
        if (price < 10000) {

            realprice = (price + "만").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //매물가격이 1억을 넘지 못할 경우
        }
        else {
            if (price % 10000 === 0) {

                pricel = (price / 10000);         //매물 가격이 1억을 넘되 만 단위가 없을 경우
                realprice = (pricel + "억").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(price % 1000 === 0)) { //매물 가격이 1억을 넘되 만 단위가 1000미만일 경우
                    pricel = (price / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (price % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "억 " + pricem + "만").toString();
                }
                else {    //그외 나머지
                    pricel = price.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "억 ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "만").toString();
                }
            }
        }
    }



    //보증금
    let deposit;
    let depositl;
    if (Deposit === null) {
        deposit = null;
    }
    else {
        if (Deposit < 10000) {
            depositl = Deposit.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

            deposit = ("/" + depositl + "만").toString();
        }
        else {
            if (Deposit % 10000 === 0) {

                pricel = (Deposit / 10000);         //매물 가격이 1억을 넘되 만 단위가 없을 경우
                deposit = ("/" + pricel + "억").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(Deposit % 1000 === 0)) { //매물 가격이 1억을 넘되 만 단위가 1000미만일 경우
                    pricel = (Deposit / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (Deposit % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    deposit = ("/" + pricel + "억 " + pricem + "만").toString();
                }
                else {    //그외 나머지
                    pricel = Deposit.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "억 ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    deposit = ("/" + pricel + "만").toString();
                }
            }
        }
    }



    //평단가
    let realresult;

    if (result < 10000) {

        realresult = (result + "만").toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //매물가격이 1억을 넘지 못할 경우
    }
    else {
        if (result % 10000 === 0) {

            pricel = (result / 10000);         //매물 가격이 1억을 넘되 만 단위가 없을 경우
            realresult = (pricel + "억").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        }
        else {
            if (!(result % 1000 === 0)) { //매물 가격이 1억을 넘되 만 단위가 1000미만일 경우
                pricel = (result / 10000);
                pricel = Math.floor(pricel);
                pricel = pricel.toFixed(0);
                pricem = (result % 10000);
                pricem = pricem.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "억 " + pricem + "만").toString();
            }
            else {    //그외 나머지
                pricel = result.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "억 ")
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "만").toString();
            }
        }
    }

    //신주소 정보 없을시 구주소
    let Addr;
    if (Addr2 === null) {
        Addr = Addr1;
    }
    else {
        Addr = Addr2;
    }
    /*-----------------------------------------------------------[뽀짝뽀짝]-------------------------------------------------------------------*/




    /*---------------------------------------------------[이미지 불러오는 함수 뚜방뚜방]-------------------------------------------------------*/
    let image = (ImageUrl);
    image = image.replace(/\'/g, "");

    image = image.replace(/\[/g, "");
    image = image.replace(/\]/g, "");

    let imagearray = image.split(',');
    const onErrorImg = (e) => {
        e.target.src = DefaultImg;
    }



    if (imagearray[0] === "") {
        image = <img src={DefaultImg} className="image--itemcard" alt="" />
    }
    else {
        image = <img src={imagearray[0]} className="image--itemcard" onError={onErrorImg} alt="" />
    }
    /*-----------------------------------------------------------[뽀짝뽀짝]-------------------------------------------------------------------*/

    /*---------------------------------------------------[모달창 띄우는 함수 뚜방뚜방]-------------------------------------------------------*/
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    /*-----------------------------------------------------------[뽀짝뽀짝]-------------------------------------------------------------------*/
    /*---------------------------------------------------[상세페이지 내부 요소 뚜방뚜방]-------------------------------------------------------*/
    /*-----------------------------------------------------------[여기서부터 이미지]-------------------------------------------------------------------*/

    const ImageArea = styled.div`
width: 750px;
height: 400px;
margin-left:auto;
margin-right:auto;

background: #e2e2e2;
border-radius: 15px;
.image{
 

  position:flex;


}
.image img{
  width:400px;
  height:400px;
  padding-left:125px;
  padding-right:125px;
  
}
.rightbutton{
width:50px;
height:50px;
float:right;
position:flex;
margin-top:175px;
}

.leftbutton{
width:50px;
height:50px;
float:left;
position:flex;
margin-top:175px;
}

`;
    /*-----------------------------------------------------------[전세,주소,간단설명 등등]-------------------------------------------------------------------*/

    const SecondItem = styled.div`
width: 750px;
height: 250px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
text-align:center;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


.tag{
padding-top:10px;
padding-left:10px;
padding-right:0;
  float:left;
}
.tag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .officetall{
    width:92px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .threeroom{
        width:76px;
    height:24px;
    padding: 0 0 0 0;
  }
  

.sellingtag{
  padding-top:10px;
  padding-right:10px;

  float:right;
  
}
.sellingtag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .bold{
    position:flex;
    font-weight: 700;
    font-size:30px;
    padding-top:40px;
  }
  .word{
    font-size:17px;
    padding-top:25px;
    
  }
  .addr{
    font-size:17px;
    padding-top:15px;
  }
`;




    const ThirdItem = styled.div`

width: 750px;
height: 1678px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


hr{
  border: 2px solid #C6C6C6;
  width: 700px;
}
.mini hr{
  
  border: 0.5px solid #C6C6C6;
  width: 700px;

}
.Long{
  width:690px;

  padding-top:20px;
  padding-left:40px;
  word-break:initial;
  white-space: pre-wrap;
}
`

    const ForthItem = styled.div`

width: 750px;
height: 809px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`;


    /*-----------------------------------------------------------[여기서부터 리턴값]-------------------------------------------------------------------*/
    return (
        <Block>
            <ul>
                <li className="component component--item_card" key={key}>


                    <React.Fragment>
                        <Table style={{ cursor: 'pointer' }} onClick={openModal}>
                            <div className="leftarea">
                                {image}
                            </div>
                            <div className="rightarea">
                                <ListFeature>
                                    <div className="tag">
                                        {{
                                            빌라: <img src={Villa} className="default" alt="" />,
                                            오피스텔: <img src={Officetell} className="officetell" alt="" />,
                                            주택: <img src={Housing} className="default" alt="" />,
                                            null: null
                                        }[Category2]}

                                        {{
                                            1: <img src={Oneroom} className="roomdefault" alt="" />,
                                            2: <img src={Tworoom} className="roomdefault" alt="" />,
                                            3: <img src={Threeroom} className="threeroom" alt="" />,
                                            null: null
                                        }[Room]}
                                    </div>



                                    <div className="list">
                                        <p><scaleFontSize><div className="bold"> {{ 1: "매매", 2: "전세", 3: "월세" }[Selling]} {realprice}

                                            {deposit}
                                        </div></scaleFontSize></p>
                                        <p><div className="em">{Addr}</div></p>
                                        {Feature}

                                        <p>
                                            {supply}m²/{dedicated}m² |<br />
                                            {realresult === '0만' ? null
                                                :
                                                <>{realresult}원/3.3m²</>}
                                        </p>


                                    </div>
                                </ListFeature>
                            </div>
                        </Table>

                        {/* /--------------------------------------------------[상세페이지 모달창 내용]---------------------------------------------------/ */}
                        <ItemDetail2 open={modalOpen} close={closeModal} header="Modal heading">
                            <ImageArea>

                                <div className="leftbutton">
                                    <img src={LeftArrow} alt="" />
                                </div>


                                <div className="rightbutton">
                                    <img src={RightArrow} alt="" />
                                </div>

                                <div className="image">{image}</div>



                            </ImageArea>
                            <SecondItem>
                                <div className="tag">
                                    {{
                                        빌라: <img src={Villa} className="default" alt="" />,

                                        오피스텔: <img src={Officetell} className="officetall" alt="" />,
                                        주택: <img src={Housing} className="default" alt="" />,
                                        null: null
                                    }[Category2]}
                                </div>
                                <div className="tag">
                                    {{
                                        1: <img src={Oneroom} className="roomdefault" alt="" />,
                                        2: <img src={Tworoom} className="roomdefault" alt="" />,
                                        3: <img src={Threeroom} className="threeroom" alt="" />,
                                        null: null
                                    }[Room]}
                                </div>
                                <div className="sellingtag">
                                    {{
                                        1: <img src={Tradingimg} alt="" />,
                                        2: <img src={Jeonseimg} alt="" />,
                                        3: <img src={Monthlyimg} alt="" />
                                    }[Selling]}
                                </div>

                                <scaleFontSize>
                                    <div className="bold"> {{ 1: "매매", 2: "전세", 3: "월세" }[Selling]} {realprice}{deposit}
                                    </div>
                                </scaleFontSize>
                                <div className="addr">
                                    {Addr}
                                </div>



                                <div className="word">
                                    {Feature}
                                </div>




                                <div className="word">
                                    {supply}m²/{dedicated}m²
                                    {realresult === '0만' ? null
                                        :
                                        <> | {realresult}원/3.3m²</>}
                                </div>

                            </SecondItem>
                            <ThirdItem>
                                <div className="Header">
                                    상세정보
                                </div>

                                <hr />

                                <div className="mini" ><hr /></div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >매물소개</div>
                                <hr />
                                <div className="Long">
                                    {LongFeature}
                                </div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >옵션</div>


                            </ThirdItem>
                            <ForthItem>
                                4
                            </ForthItem>
                        </ItemDetail2>
                    </React.Fragment>
                </li>
            </ul>

        </Block>

    );
}

export default ItemCard;
