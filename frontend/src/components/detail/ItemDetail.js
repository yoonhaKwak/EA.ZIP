import React from "react";
import '../../styles/css/ItemDetail.css';
import styled from "styled-components";

// 필터목록 클릭시 나오는 필터창 구간
export default function ItemDetail() {
    return (
        <>
            <div className='modal'>
                <h5>1.병원</h5>
                <h5>2.편의점</h5>
                <h5>3.CCTV</h5>
                <hr style={{ margin: '50px' }} />
                <p>체크박스 구간</p>
            </div>
        </>
    );
}