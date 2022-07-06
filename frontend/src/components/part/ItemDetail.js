import React from "react";
import styled from "styled-components";

const Itemdetail = styled.div`
    width: 1100px;
    height: auto;
    background: #fff;
    z-index: 108;
    top: 10%;
    left: 25%;
    position: fixed;
    border: none;
    border-radius: 20px;
    overflow-y: auto;
`;

// 필터목록 클릭시 나오는 필터창 구간
export default function ItemDetail() {
    return (
        <>
            <Itemdetail>
                <h5>상세정보</h5>
                <hr style={{ margin: '50px' }} />
            </Itemdetail>
        </>
    );
}