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
import Middle from '../../styles/icons/Middle.svg';
import Low from '../../styles/icons/Low.svg';
import High from '../../styles/icons/High.svg';
import Management from '../../styles/icons/Management.svg';
import ParkingLot from '../../styles/icons/Parking.svg';
import RoomNBath from '../../styles/icons/RoomNBath.svg';





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
    Supply, Dedicated, Jeonse, Monthly, Trading, Selling, Room, Deposit, SupplyP, Addr1, Addr2, LongFeature, Layer, AllLayer, LayerType, ManageCost, RoomN, Parking, Bath, Parking2 }) {



    /*--------------------------------------------[????????? ?????? ????????? ????????????]------------------------------------------*/



    let price = (Jeonse + Monthly + Trading).toFixed(0);
    let result = (Trading / SupplyP).toFixed(0);
    let supply = (Supply).toFixed(0);
    let dedicated = (Dedicated).toFixed(0);

    let pricel;
    let realprice;
    let pricem;

    if (Selling === 3) {
        realprice = (price + "???").toString(); //????????? ??????
    }
    else {  //????????? ????????????
        if (price < 10000) {

            realprice = (price + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
        }
        else {
            if (price % 10000 === 0) {

                pricel = (price / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
                realprice = (pricel + "???").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(price % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                    pricel = (price / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (price % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "??? " + pricem + "???").toString();
                }
                else {    //?????? ?????????
                    pricel = price.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "???").toString();
                }
            }
        }
    }



    //?????????
    let deposit;
    let depositl;
    if (Deposit === null) {
        deposit = null;
    }
    else {
        if (Deposit < 10000) {
            depositl = Deposit.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

            deposit = ("/" + depositl + "???").toString();
        }
        else {
            if (Deposit % 10000 === 0) {

                pricel = (Deposit / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
                deposit = ("/" + pricel + "???").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(Deposit % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                    pricel = (Deposit / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (Deposit % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    deposit = ("/" + pricel + "??? " + pricem + "???").toString();
                }
                else {    //?????? ?????????
                    pricel = Deposit.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    deposit = ("/" + pricel + "???").toString();
                }
            }
        }
    }



    //?????????
    let realresult;

    if (result < 10000) {

        realresult = (result + "???").toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
    }
    else {
        if (result % 10000 === 0) {

            pricel = (result / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
            realresult = (pricel + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        }
        else {
            if (!(result % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                pricel = (result / 10000);
                pricel = Math.floor(pricel);
                pricel = pricel.toFixed(0);
                pricem = (result % 10000);
                pricem = pricem.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "??? " + pricem + "???").toString();
            }
            else {    //?????? ?????????
                pricel = result.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "???").toString();
            }
        }
    }
    //?????????
    let managecost;


    if (ManageCost < 10000) {

        managecost = (ManageCost).toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
    }
    else {
        if (ManageCost % 10000 === 0) {

            pricel = (ManageCost / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
            managecost = (pricel + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            if (!(ManageCost % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                pricel = (ManageCost / 10000);
                pricel = Math.floor(pricel);
                pricel = pricel.toFixed(0);
                pricem = (ManageCost % 10000);
                pricem = pricem.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                managecost = (pricel + "??? " + pricem).toString();
            }
            else {    //?????? ?????????
                pricel = ManageCost.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                managecost = (pricel).toString();
            }
        }
    }
    managecost = managecost + "???";

    let roomnbath;

    roomnbath = "???" + RoomN + "/??????" + Bath

    let parkinglot;

    if (Parking === null) {
        parkinglot = Parking2;
    }
    else if (Parking2 === null) {
        parkinglot = Parking;
    }
    else if (Parking2 === null && Parking == null) {
        parkinglot = null;
    }
    else {
        parkinglot = Parking2;
    }

    parkinglot = "?????? " + parkinglot + "???"
    //????????? ?????? ????????? ?????????
    let Addr;
    if (Addr2 === null) {
        Addr = Addr1 + " " + Layer + "???" + "(??? " + AllLayer + "???)";;
    }
    else {
        Addr = Addr2 + " " + Layer + "???" + "(??? " + AllLayer + "???)";
    };



    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/




    /*---------------------------------------------------[????????? ???????????? ?????? ????????????]-------------------------------------------------------*/
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
    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/

    /*---------------------------------------------------[????????? ????????? ?????? ????????????]-------------------------------------------------------*/
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/
    /*---------------------------------------------------[??????????????? ?????? ?????? ????????????]-------------------------------------------------------*/
    /*-----------------------------------------------------------[??????????????? ?????????]-------------------------------------------------------------------*/

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
    /*-----------------------------------------------------------[??????,??????,???????????? ??????]-------------------------------------------------------------------*/

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
.Icon{

    height:200px;
    padding-left:100px;
    
}
.Icon .Tag{
    
    padding-bottom: 20px;
    bottom:15px;
    width:70px;
    height:auto;
    padding-right:88px;
    float:left;
   

  bottom: 10px;
    
}
.Icon .Tag .a img{

    padding-right:auto;
    padding-left:auto;
    width:70px;
   padding-top:27px;
    
}
.Icon .Tag .b img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:66px;

}
.Icon .Tag .c img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:80px;


}
.Icon .Tag .d img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:70px;

}
.Icon .Tag .e img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:71px;

}
.Icon .Tag .f img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:96px;
}

.Icon .Tag .Text{
padding-top:15px;
width:70px;

text-align : center;
}
.Icon .Tag .Text .Wtf{

 white-space: nowrap;

}

.Long{
  width:690px;
  padding-top:20px;
  padding-left:40px;
  word-break:initial;
  white-space: pre-wrap;
  padding-bottom:20px;
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


    /*-----------------------------------------------------------[??????????????? ?????????]-------------------------------------------------------------------*/
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
                                            ??????: <img src={Villa} className="default" alt="" />,
                                            ????????????: <img src={Officetell} className="officetell" alt="" />,
                                            ??????: <img src={Housing} className="default" alt="" />,
                                            ?????????????????????: <img src={Housing} className="default" alt="" />,
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
                                        <p><scaleFontSize><div className="bold"> {{ 1: "??????", 2: "??????", 3: "??????" }[Selling]} {realprice}

                                            {deposit}
                                        </div></scaleFontSize></p>
                                        <p><div className="em">{Addr}</div></p>
                                        {Feature}

                                        <p>
                                            {supply}m??/{dedicated}m?? |<br />
                                            {realresult === '0???' ? null
                                                :
                                                <>{realresult}???/3.3m??</>}
                                        </p>


                                    </div>
                                </ListFeature>
                            </div>
                        </Table>

                        {/* /--------------------------------------------------[??????????????? ????????? ??????]---------------------------------------------------/ */}
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
                                        ??????: <img src={Villa} className="default" alt="" />,

                                        ????????????: <img src={Officetell} className="officetall" alt="" />,
                                        ??????: <img src={Housing} className="default" alt="" />,
                                        ?????????????????????: <img src={Housing} className="default" alt="" />,
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
                                    <div className="bold"> {{ 1: "??????", 2: "??????", 3: "??????" }[Selling]} {realprice}{deposit}
                                    </div>
                                </scaleFontSize>
                                <div className="addr">
                                    {Addr}
                                </div>



                                <div className="word">
                                    {Feature}
                                </div>




                                <div className="word">
                                    {supply}m??/{dedicated}m??
                                    {realresult === '0???' ? null
                                        :
                                        <> | {realresult}???/3.3m??</>}
                                </div>

                            </SecondItem>
                            <ThirdItem>
                                <div className="Header">
                                    ????????????
                                </div>

                                <hr />

                                <div className="Icon">
                                    <div className="Tag">
                                        {{
                                            "?????????": <div className="b"><img src={Middle} alt="" /></div>,
                                            "??????": <div className="c"><img src={Low} alt="" /></div>,
                                            "??????": <div className="a"><img src={High} alt="" /></div>,
                                            null: null
                                        }[LayerType]}
                                        <div className="Text">{LayerType}</div>
                                    </div>
                                    <div className="Tag">

                                        <div className="d"><img src={RoomNBath} alt="" /></div>

                                        <div className="Text">
                                            <div className="Wtf">
                                                {roomnbath}</div></div>
                                    </div>
                                    <div className="Tag">
                                        <div className="e"><img src={Management} alt="" /></div>
                                        <div className="Text">
                                            ?????????{`\n`}
                                            <div className="wtf">
                                                {managecost}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="Tag">
                                        <div className="f"><img src={ParkingLot} alt="" /></div>
                                        <div className="Text"> {parkinglot}</div>
                                    </div>

                                </div>





                                <div className="mini" ><hr /></div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >????????????</div>
                                <hr />
                                <div className="Long">
                                    {LongFeature}
                                </div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >??????</div>


                            </ThirdItem>
                            <ForthItem>
                                4
                            </ForthItem>
                        </ItemDetail2>
                    </React.Fragment>
                </li>
            </ul>

        </Block >

    );
}

export default ItemCard;