import styled from "styled-components";
import pallette from "../../styles/pallette";

const Menu = styled.div`
font-size:1.2rem;
font-weight:700;
color:${pallette.white[1]};

hover{
    color:${pallette.orange[1]};
}
`


const MainMenu=()=>{
    return(    
        <>
        <Menu herf="#">일반추천</Menu>
        <Menu herf="#">지역추천</Menu>
        <Menu herf="#">프리미엄</Menu>
        <Menu herf="#">마이페이지</Menu>
        </>
    );
}

export default MainMenu;
