import styled from 'styled-components';
import pallette from '../../styles/pallette';
import Search from '../../styles/icons/Search.svg';

const StyledBox = styled.div`
  position:flex;
  width: 30.5rem;
  height: 2rem;
  border-radius: 100px;
  border: solid 3px ${pallette.orange[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  
   
`;
const StyledInput = styled.input`
width: 27rem;
border: none;
margin: auto 0 auto 0rem;
:focus {
    outline: none;
    width:27rem;
  }
::placeholder{
  color: #c6c6c6;
}
`;
const Button = styled.button`
    display:flex;
    margin:1% 0 0 0;
    background-image:url(${Search}); 
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    border:none;
    background-color: transparent;
`;


const SearchForm = ({ onClick, onChange }) => {
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

export default SearchForm;