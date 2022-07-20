import React from 'react';
import styled from 'styled-components';
import pallette from '../../styles/pallette';
import Union from '../../styles/icons/Union.svg';

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
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color:#f5f5f5;
  font-weight: 700;
}
.modal > section > header button {
  position: absolute;
  top: 20px;
  right: 12px;


  text-align: center;

  background-color: transparent;
  
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


const ItemDetail2 = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

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
            <main>{props.children}</main>

          </section>
        ) : null}
      </div>
    </Detail>
  );
};


export default ItemDetail2;
