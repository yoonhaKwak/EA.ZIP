import React, { useState } from 'react'
import KakaoMap from './KakaoMap'
import KakaoMapTest from './KakaoMapTest'
import styled from 'styled-components';
import pallette from 'styles/pallette';
import Search from '../styles/icons/Search.svg';
const StyledBox = styled.form`
  position:flex;
  background-color:white;
  margin-left:550px;
  width: 50.6rem;
  height: 2.7rem;
  border-radius: 100px;
  border: solid 3px ${pallette.orange[0]};
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const StyledInput = styled.input`
width: 46rem;
height: 2.5rem;
background-color:white;
font-size: 22px;
border: none;
:focus {
    outline: none;
    width:46rem;
  }
::placeholder{
  color: #c6c6c6;
}
`;
const Button = styled.button`
    display:flex;
    margin:2% 0 0 0;
    background-image:url(${Search}); 
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    border:none;
    background-color: transparent;
`;

function KakaoSearch(onClick) {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }

    return (
        <>
            <StyledBox className="inputForm" onSubmit={handleSubmit}>
                <Button type="button" onClick={onClick} />
                <StyledInput placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />

            </StyledBox>
            <KakaoMapTest searchPlace={Place} />
        </>
    )
}

export default KakaoSearch;