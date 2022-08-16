import styled from 'styled-components';
import '../../styles/fonts/font.css';
import pallette from '../../styles/pallette';
import { Link } from 'react-router-dom';
import Responsive from '../detail/Responsive';
import logo from '../../styles/img/Group 65.svg';
import axios from 'axios';

const HeaderBlock = styled.div`
position:fixed;
width:100%;
background:rgba(0,0,0,0);
`
const Wrapper = styled(Responsive)`
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
        margin: auto 6rem auto 6rem;
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
const Spacer = styled.div`
height: 4rem;
`;

const MainHeader = () => {
    const logout = async () => {
        axios(
            {
                url: 'member/logout',
                method: 'post',
                data: {
                    "token": sessionStorage.token
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(function (response) {
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("token");
            window.location.reload();
            alert('로그아웃완료');

        }
        )
    }
    return (
        <header>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className="logo"><img src={logo} alt="" /></Link>
                    {sessionStorage.getItem('userId') ?
                        <div className="middle">
                            <li>
                                <Link to='/normalsearch'>일반추천</Link>
                            </li>
                            <li>
                                <Link to='/targetsearch'>지역추천</Link>
                            </li>
                            <li>
                                {
                                    sessionStorage.getItem('userId')
                                        ?
                                        <Link to='/Mypage'>마이페이지</Link>
                                        :
                                        <Link to='/login' onClick={() => { alert('로그인이 필요합니다.') }}>마이페이지</Link>
                                }
                            </li>
                        </div>
                        : null}
                    <div className="right">
                        <li>
                            {
                                sessionStorage.getItem('userId') ?
                                    <Link to='/' onClick={() => logout()}>로그아웃</Link>
                                    :
                                    <Link to='/login'>로그인</Link>
                            }
                        </li>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </header>
    );
}

export default MainHeader;