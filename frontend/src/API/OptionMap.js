import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState, createContext } from 'react';
import SearchMarker from '../styles/icons/SearchMarker.svg';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import ItemDetailMarker from "../components/part/ItemDetailMarker";
import styled from "styled-components";
import { param } from "jquery";

import OptionButton from "components/detail/OptionButton";
import CafeOn from "../styles/icons/locate/CafeOn.svg";
import CafeOff from "../styles/icons/locate/CafeOff.svg";
import HosOn from "../styles/icons/locate/HosOn.svg";
import HosOff from "../styles/icons/locate/HosOff.svg";
import ConviOn from "../styles/icons/locate/ConviOn.svg";
import ConviOff from "../styles/icons/locate/ConviOff.svg";
import LaunOn from "../styles/icons/locate/LaunOn.svg";
import LaunOff from "../styles/icons/locate/LaunOff.svg";
import PubheOn from "../styles/icons/locate/PubheOn.svg";
import PubheOff from "../styles/icons/locate/PubheOff.svg";
import BankOn from "../styles/icons/locate/BankOn.svg";
import BankOff from "../styles/icons/locate/BankOff.svg";
import CommuOn from "../styles/icons/locate/CommuOn.svg";
import CommuOff from "../styles/icons/locate/CommuOff.svg";
import PostOn from "../styles/icons/locate/PostOn.svg";
import PostOff from "../styles/icons/locate/PostOff.svg";
import CycleOn from "../styles/icons/locate/CycleOn.svg";
import CycleOff from "../styles/icons/locate/CycleOff.svg";
import CCTVOn from "../styles/icons/locate/CCTVOn.svg";
import CCTVOff from "../styles/icons/locate/CCTVOff.svg";
import SubwayOn from "../styles/icons/locate/SubwayOn.svg";
import SubwayOff from "../styles/icons/locate/SubwayOff.svg";
import BusstaOn from "../styles/icons/locate/BusstaOn.svg";
import BusstaOff from "../styles/icons/locate/BusstaOff.svg";
import BusterOn from "../styles/icons/locate/BusterOn.svg";
import BusterOff from "../styles/icons/locate/BusterOff.svg";


import CafeMarker from "../styles/icons/optionmarker/cafe.svg"
import HosMarker from "../styles/icons/optionmarker/hospital.svg"
import SubMarker from "../styles/icons/optionmarker/subway.svg"
import ConviMarker from "../styles/icons/optionmarker/convenience.svg"
import LaunMarker from "../styles/icons/optionmarker/laundry.svg"
import BankMarker from "../styles/icons/optionmarker/bank.svg"
import CommuMarker from "../styles/icons/optionmarker/comunicate.svg"
import PostMarker from "../styles/icons/optionmarker/post.svg"
import PubhoMarker from "../styles/icons/optionmarker/publichospital.svg"
import CycleMarker from "../styles/icons/optionmarker/cycle.svg"
import CCTVMarker from "../styles/icons/optionmarker/cctv.svg"
import BusstaMarker from "../styles/icons/optionmarker/busstation.svg"
import BusterMarker from "../styles/icons/optionmarker/busterminal.svg"
/*---------------------------------------------------------------[옵션버튼]-----------------------------------------------------------------------*/
const OptionButtonAreaA = styled.main`
width:auto;
float:left;
height:auto;
display: flex;
justify-content: space-between;
padding-top:20px;
padding-left:150px;
label{
padding-right:25;

}

`
const OptionButtonAreaB = styled.main`
width:auto;
float:left;
height:auto;
display: flex;
justify-content: space-between;
padding-top:20px;
padding-left:110px;
label{
padding-right:25;

}`
const MapArea = styled.div`

    width:690px;
    height:500px;
    padding-left:30px;
    padding-top:10px;
    
`

/*---------------------------------------------------------------[뚜방뚜방]-----------------------------------------------------------------------*/

function OptionMap(Idx, Lat, Lng) {
    const [ItemList, SetItemList] = useState([]);
    let Home = [
        Idx
    ];
    const centerlat = Home[0].lat;
    const centerlng = Home[0].lng;
    useEffect(() => {
        axios({
            method: 'post',
            url: '/cash/cashing',
            data: {
                "lat": centerlat,
                "lng": centerlng
            },
            baseURL: 'http://localhost:8080'
        }
        )
            .then((response) => {
                SetItemList((response.data));
            });
    }, []);
    // /cash/cashing
    console.log(ItemList)
    console.log(Idx)
    // name
    // lat
    // lng



    console.log(Idx);


    return (
        <MapArea>
            <Map
                center={{
                    lat: centerlat,
                    lng: centerlng
                }}
                isPanto={true}
                style={{ width: "100%", height: "100%", maxHeight: "500px", maxWidth: "690px" }}
                level={5}
                minLevel={1}
            >


                {Home.map((marker) => (
                    <MapMarker
                        key={marker.idx}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: SearchMarker,
                            size: {
                                width: 60,
                                height: 50,
                            },
                            options: {
                                offset: {
                                    x: 30,
                                    y: 45,
                                },
                            },
                        }}
                    />
                ))}
                {ItemList.map((marker) => (
                    <MapMarker
                        key={marker.name}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: BusstaMarker,
                            size: {
                                width: 25,
                                height: 25,
                            },
                            options: {
                                offset: {
                                    x: 25,
                                    y: 25,
                                },
                            },
                        }}
                    />
                ))}
                <OptionButtonAreaA>
                    <OptionButton Id="Convenience" A={ConviOn} B={ConviOff} />
                    <OptionButton Id="Cafe" A={CafeOn} B={CafeOff} />
                    <OptionButton Id="Laundry" A={LaunOn} B={LaunOff} />
                    <OptionButton Id="PublicHospital" A={PubheOn} B={PubheOff} />
                    <OptionButton Id="Bank" A={BankOn} B={BankOff} />

                </OptionButtonAreaA>
                <OptionButtonAreaB>
                    <OptionButton Id="Hospital" A={HosOn} B={HosOff} />
                    <OptionButton Id="Comunicate" A={CommuOn} B={CommuOff} />
                    <OptionButton Id="Post" A={PostOn} B={PostOff} />
                    <OptionButton Id="Cycle" A={CycleOn} B={CycleOff} />
                    <OptionButton Id="CCTV" A={CCTVOn} B={CCTVOff} />
                    <OptionButton Id="Subway" A={SubwayOn} B={SubwayOff} />

                </OptionButtonAreaB>
            </Map >
        </MapArea>
    );
}

export default OptionMap;