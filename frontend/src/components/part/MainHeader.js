import styled from 'styled-components';
import '../../styles/fonts/font.css';
import pallette from '../../styles/pallette';
import {Link} from 'react-router-dom';
import Responsive from '../detail/Responsive';


const HeaderBlock=styled.div`
position:fixed;
width:100%;
background:rgba(0,0,0,0);
`
const Wrapper =styled(Responsive)`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;

.logo{
    font-size:2.765rem;
    font-weight:400;
    letter-spacing:2px;
    font-family: "Gugi";
    font-style: normal;
    color:white;
}
.middle{
    display:flex;
    align-items: center;


}
.right{
    display: flex;
    align-items: center;
}
    li{
        margin: auto 8rem auto auto;
        padding: 0 0 0 0;
        border : 0;
        float: left;
        font-size: 1.2rem;
        font-weight: 700;
        color:${pallette.white[1]};
        list-style:none;

        
    }
    li:hover{
        color:${pallette.orange[1]};
    }
    `;
const Spacer =styled.div`
height: 4rem;
`;

const MainHeader=()=>{
    return(
        <>
        <HeaderBlock>
            <Wrapper>
                <Link to='/' className="logo">EA.ZIP</Link>                    
                <div className="middle">
                    <li>
                        <Link to='/'>일반추천</Link>
                    </li>
                    <li>
                        <Link to='/'>지역추천</Link>
                    </li>
                    <li>
                        <Link to='/'>프리미엄</Link>
                    </li>
                    <li>
                        <Link to='/'>마이페이지</Link>
                    </li>
                </div>
                <div className="right">
                </div>
            </Wrapper>    
        </HeaderBlock>
        <Spacer/>
        </>
    );
}

export default MainHeader;