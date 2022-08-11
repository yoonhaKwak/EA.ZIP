import React, { Component } from "react";
import ItemCard from "./ItemCard";


const Listpage = ({ ItemList }) => {
  console.log(ItemList);
  return (
    <ul >
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
              BathN={itemdata.bathN_number}//화장실
              MoveDate={itemdata.move_date}//입주 가능일
              Direction={itemdata.direction}//방향
              DirectionN={itemdata.directionN}//방향기준
              Category1={itemdata.category1}//카테고리1
              Price={itemdata.price}//전세,매매,보증금
              Id={itemdata.idx}//매물 아이디

              Aircon_Hanging={itemdata.aircon_hanging}//벽걸이에어컨
              Fridge={itemdata.fridge}//냉장고
              Wardrobe={itemdata.wardrobe}//옷장
              Microwave={itemdata.microwave}//전자레인지
              Shoe={itemdata.shoe}//신발장
              Washing={itemdata.washing}//세탁기
              Elevator={itemdata.elevator}//엘리베이터
              Security_private={itemdata.security_private}//사설경비
              Security={itemdata.security}//자체경비
              Cctv={itemdata.cctv}//CCTV
              Bed={itemdata.bed}//침대
              Desk={itemdata.desk}//책상
              Bidet={itemdata.bidet}//비데
              Closet={itemdata.closet}//붙박이장
              Table={itemdata.table}//식탁
              Couch={itemdata.couch}//소파
              Shower_booth={itemdata.Shower_booth}//샤워부스
              Bath={itemdata.bath}//욕조
              Gas={itemdata.gas}//가스레인지
              Induction={itemdata.induction}//인덕션
              Oven={itemdata.oven}//가스오븐
              Interphone={itemdata.interphone}//인터폰
              Cardkey={itemdata.cardkey}//카드키
              Fire_alarm={itemdata.fire_alarm}//화재경보기
              Dishwasher={itemdata.dishwasher}//식기세척기
              Sink={itemdata.sink}//싱크대
              Aircon_system={itemdata.aircon_system}//시스템에어컨
              Aircon_standing={itemdata.aircon_standing}//스탠딩에어컨
              Delivery_box={itemdata.dilivery_box}//무인택배함
              Window_guard={itemdata.window_guard}//방범창
              Entrance_security={itemdata.entrance_security}//현관보안
              Drier={itemdata.drier}//건조기
              Lat={itemdata.lat}//경위도
              Lng={itemdata.lng}//경위도
            />
          );
        })}
    </ul>
  );

}


export default Listpage;