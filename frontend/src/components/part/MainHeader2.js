import styled from 'styled-components';
import '../../styles/fonts/font.css';
import pallette from '../../styles/pallette';
import { Link } from 'react-router-dom';
import Responsive from '../detail/Responsive';
import logo from '../../styles/background/Group 65.svg';

const HeaderBlock = styled.div`
position:absolute;
width:100%;
background:rgba(0,0,0,0.25);
`
const Wrapper = styled(Responsive)`
height: 4rem;
display: fixed ;
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
const Spacer = styled.div`
height: 4rem;
`;

const MainHeader = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className="logo"><img src={logo} alt="" /></Link>
                    <div className="middle">
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default MainHeader;