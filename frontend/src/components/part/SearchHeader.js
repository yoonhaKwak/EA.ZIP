import styled from 'styled-components';
import '../../styles/fonts/font.css';
import pallette from '../../styles/pallette';
import { Link } from 'react-router-dom';
import Responsive from '../detail/Responsive';
import SearchForm from '../detail/SearchForm';
import logo from '../../styles/img/Group 64.svg';



const HeaderBlock = styled.div`
position:fixed;
width:100%;
background:${pallette.white[1]};
padding-top:0.4rem;
`
const Wrapper = styled(Responsive)`
padding-top:0.4rem;
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
    color:${pallette.orange[0]};
}

.logo img{
    width:140px;
    height:40px;
}
.middle{
    display:flex;
    align-items: center;
    margin:auto 0rem auto 22rem;
}
.right{
    display: flex;
    min-width:784px;
    align-items: center;
    margin:auto 0rem auto 5rem;
}
    li{
        margin: auto 4rem auto auto;
        padding: 0 1rem 0 0;
        border : 0;
        float: left;
        font-size: 1.2rem;
        font-weight: 700;
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

const MainHeader = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className="logo"><img src={logo} alt="" /></Link>
                    <div className="middle">
                        <SearchForm />
                    </div>
                    <div className="right">
                        <li>
                            <Link to='/normalsearch'>일반추천</Link>
                        </li>
                        <li>
                            <Link to='/targetsearch'>지역추천</Link>
                        </li>
                        <li>
                            <Link to='/'>프리미엄</Link>
                        </li>
                        <li>
                            <Link to='/Mypage'>마이페이지</Link>
                        </li>
                        <li>
                            <Link to='/login'>로그인</Link>
                        </li>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default MainHeader;