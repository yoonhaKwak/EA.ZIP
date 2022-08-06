import React from "react";
import ItemCard from "./ItemCard";


const MyListpage = ({ ItemList }) => {
  console.log(ItemList);
  return (
    <ul className="list__itemview">
      {ItemList &&
        ItemList.map((itemdata) => {
          return (
            <ItemCard
              ImageUrl={itemdata.image_url}//이미지주소
              Category2={itemdata.category2}//카테고리2
              Name={itemdata.name}//매물명
              Feature={itemdata.ad}//특징광고내용
              Supply={itemdata.supply}//공급면적
              Dedicated={itemdata.exclusive}//전용면적
              Jeonse={itemdata.jeonse}//전세가
              Monthly={itemdata.monthly}//월세가
              Trading={itemdata.price}//매매가
              Selling={itemdata.type}//매물거래구분
              Room={itemdata.room_number}//방수
              Deposit={itemdata.deposit}//월세보증금
              SupplyP={itemdata.supply_pyeong}//공급면적평
              Addr2={itemdata.addr2}//신주소
              Addr1={itemdata.addr1}//구주소
              LongFeature={itemdata.feature}//상세광고내용
              AllLayer={itemdata.layer_all}//총층
              LayerType={itemdata.layer_name}//저층,중층,고층
              Layer={itemdata.layer}//매물층
              ManageCost={itemdata.management_cost}//관리비
              RoomN={itemdata.room_number}//방수
              Parking={itemdata.parking}//주차장
              Parking2={itemdata.parking2}//주차장2
              Bath={itemdata.bathN_number}//화장실
              MoveDate={itemdata.move_date}//입주 가능일
              Direction={itemdata.direction}//방향
              DirectionN={itemdata.directionN}//방향기준
              Category1={itemdata.category1}//카테고리1
              Price={itemdata.price}//전세,매매,보증금
            />
          );
        })}
    </ul>
  );

}


export default MyListpage;