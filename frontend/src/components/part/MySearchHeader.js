import styled from 'styled-components';
import '../../styles/fonts/font.css';
import pallette from '../../styles/pallette';
import { Link } from 'react-router-dom';
import Responsive from '../detail/Responsive';
import logo from '../../styles/img/Group 64.svg';



const HeaderBlock = styled.div`
position:fixed;
width:100%;
background:${pallette.white[1]};
`
const Wrapper1 = styled.div`
padding-top:0.5rem;
display: fixed;
align-items: center;

.logo{
padding-left:10px;
font-family: "Gugi";
font-style: normal;
color:${pallette.orange[0]};
}

.logo img{
width:140px;
height:40px;
}

.left {
    display:flex;
    align-items: center;
    margin:auto 0rem auto 20rem;
    font-size:1.8rem;
    font-weight:700;
    color:${pallette.orange[0]};
}
`;

const Wrapper = styled(Responsive)`
padding-top:0.3rem;
display: fixed;
align-items: center;
justify-content: space-between;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;



.middle{
    display:flex;
    align-items: center;
    margin:auto 0rem auto 5rem;
    font-size:1.2rem;
    font-weight:700;
}
.right{
    display: flex;
    min-width:784px;
    align-items: center;
    margin:auto 0rem auto 1rem;
    font-size:1.2rem;
    font-weight:700;
}
    li{
        margin: auto 4rem auto auto;
        padding: 0 1rem 0 0;
        border : 0;
        float: left;
        color:black;
        list-style:none;

        
    }
    li:hover{
        color:${pallette.orange[0]};
    }

    `;

const Spacer = styled.div`
height: 4rem;
`;

const MySearchHeader = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper1>
                    <Link to='/' className="logo"><img src={logo} alt="" /></Link>
                    <div className='left'>
                        <Link to='/Mypage'>마이페이지</Link>
                    </div>
                    <Wrapper>
                        <div className="middle">
                            <li>
                                <Link to='/Mypage'>내가 찜한 매물</Link>
                            </li>
                            <li>
                                <Link to='/'>최근 본 매물</Link>
                            </li>
                        </div>
                        <div className="right">

                            <li>
                                <Link to='/login'>로그아웃</Link>
                            </li>
                        </div>
                    </Wrapper>
                </Wrapper1>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default MySearchHeader;