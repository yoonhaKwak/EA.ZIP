import React from 'react';
import styled from 'styled-components';
import pallette from '../../styles/pallette';
import Union from '../../styles/icons/Union.svg';
import ItemCardMarker from 'components/detail/ItemCardMarker';
const Detail = styled.div`
.modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 120;
  background-color: rgba(0, 0, 0, 0.6);
  width:100%;
  height:100%;
  border-radius:0;
  border:none;
  word-break:keep-all;

}
.modal button {
  outline: none;
  cursor: pointer;
  border: 0;
}
.modal > section {
position:center;

max-height:840px;
min-height:840px;
max-width: 850px;
 min-width: 850px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #f5f5f5;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow-y:auto;
  overflow-x:hidden;
  &::-webkit-scrollbar {
 
 width: 14px;
 height: 20px;
 border-radius: 6px;
 min-height: 10px;

}
&::-webkit-scrollbar-thumb {
 background: ${pallette.orange[0]};
 width: 8px;
 height: 8px;
 border-radius: 20px;
 background-clip: padding-box;
 border: 4px solid transparent;}

 &::-webkit-scrollbar-button {
  width: 0;
  height: 43px;
  display:hidden;
}
  
  

}
.modal > section > header {
  position: absolute;


}
.modal > section > header button {
  position: absolute;
  top: 20px;
  left:797px;

  text-align: center;

  background-color: transparent;
}
.modal > section > header button > img {
width:23px;
height:23px;
  
}
.modal > section > main {
  padding-bottom:42px;
  padding:30px 40px 42px 40px;





}
.Header{
  font-weight:700;
  font-size:30px;
  padding-top:20px;
  padding-left:20px;
}
.MiniHeader{
  font-weight:700;
  font-size:20px;
  padding-top:0px;
  padding-left:40px;
}

.modal.openModal {
  display: flex;
  align-items: center;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-bg-show 0.3s;
}
@keyframes modal-show {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes modal-bg-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;

const ItemDetailMarker = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, ItemData } = props;

  const itemdata = ItemData;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <Detail>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              <button className="close" onClick={close}>
                <img src={Union} alt="" />

              </button>
            </header>
            <main>
              <ul >

                <ItemCardMarker
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
              </ul>
            </main>

          </section>
        ) : null}
      </div>
    </Detail>
  );
};


export default ItemDetailMarker;
