import MainHeader from "../components/part/MainHeader";
import React from "react";
import styled from "styled-components";
import image2 from "../styles/background/2.jpg";
import Normal from "../styles/icons/Normal.svg";
import Location from "../styles/icons/Location.svg";
import { Link } from 'react-router-dom';



const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${image2});
background-repeat: no-repeat;
background-size: cover;
justify-content: space-between;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;

.Bodya{
    float: left;
    padding-top:250px;
    padding-left:500px;   
}
.Bodyb{
    float: left;
    padding-top:250px;
    padding-left:120px;   
}
`;

const NormalButton = styled.div`
width:400px;
height:400px;
background: #FFFFFF;
border-radius: 50px;

&:hover{
    box-shadow: 0px 4px 30px #FF9431;
}

img{
padding-top:90px;
padding-left:100px;
}
.Text{
    width:192px;
    height:28px;
font-size:25px;
color:#FF9431;
padding-left:104px;
padding-top:63px;
font-weight:700;
align-items: center;
text-align: center;
white-space:nowrap;
line-height: 29px;
}
`
const LocationButton = styled.div`
width:400px;
height:400px;
background: #FFFFFF;
border-radius: 50px;

&:hover{
    box-shadow: 0px 4px 30px #FF9431;
}
img{

    padding-top:60px;
    padding-left:100px;
}
.Text{
    width:222px;
    height:33px;
font-size:25px;
color:#FF9431;
padding-left:89px;
padding-top:27.5px;
font-weight:700;
align-items: center;
text-align: center;
white-space:nowrap;
line-height: 29px;
}
`

const SamplePage = () => {
    return (
        <Container>
            <MainHeader />
            <div className="Bodya">
                <NormalButton>
                    <Link to='/'>
                        <img src={Normal} alt="" />
                        <div className="Text">
                            지역을 입력하세요
                        </div>

                    </Link>
                </NormalButton>
            </div>
            <div className="Bodyb">
                <LocationButton>
                    <Link to='/search'>
                        <img src={Location} alt="" />
                        <div className="Text">
                            목적지를 입력하세요
                        </div>
                    </Link>
                </LocationButton>
            </div>

        </Container>
    );
};
export default SamplePage;