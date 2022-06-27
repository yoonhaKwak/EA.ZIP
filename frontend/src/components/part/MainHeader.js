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
display: fixed;
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
    display:fixed;
    align-items: center;



}
.right{
    display: fixed;
    align-items: center;
    
    
}
    li{
        margin: auto 12rem auto 0;
        padding: 0 0 0 0;
        border : 0;
        float: left;
        font-size: 1.1rem;
        font-weight: 600;
        color:${pallette.white[1]};
        list-style:none;

        
    }
    li:hover{
        color:${pallette.orange[0]};
    }
    `;
const Spacer =styled.div`
height: 4rem;
`;

const MainHeader=()=>{
    return(
        <header>
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
        </header>
    );
}

export default MainHeader;