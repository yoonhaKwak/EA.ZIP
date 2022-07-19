import styled from 'styled-components';
import pallette from '../../styles/pallette';
import Search from '../../styles/icons/Search.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';


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


const MainSearchForm = ({ onClick, onChange }) => {
  const [qurery, setQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3300")
    }
  }, [])

  return (
    <StyledBox>
      <Button type="button" onClick={onClick} />
      <StyledInput
        placeholder="지역을 입력하세요!"
        type="search"
        onChange={onChange}
      />
    </StyledBox>
  )
}

export default MainSearchForm;