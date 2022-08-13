import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState, useContext } from 'react';
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
import { array } from "prop-types";

/*---------------------------------------------------------------[옵션버튼]-----------------------------------------------------------------------*/
const OptionButtonAreaA = styled.main`
width:auto;
float:left;
height:auto;
display: flex;
justify-content: space-between;
padding-top:20px;

label{
padding-right:14;

}
`

const MapArea = styled.div`

    width:690px;
    height:500px;
    padding-left:30px;
    padding-top:10px;
 button{
    visibility:hidden;
 }   
`

/*---------------------------------------------------------------[뚜방뚜방]-----------------------------------------------------------------------*/

function OptionMap(Idx, Lat, Lng, AAA) {


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
    // name
    // lat
    // lng

    /*     console.log(ItemList)
        console.log(Idx)
        console.log(Home) */


    /* console.log(Check);
    console.log(OptionId);
    console.log(OptionOnOff); */


    /*   console.log(ItemList); */
    let BankList = ItemList['bank_tbl'];
    let BogunList = ItemList['bogun_tbl'];
    let CafeList = ItemList['cafe_tbl'];
    let CctvList = ItemList['cctv_tbl'];
    let DdarList = ItemList['ddar_tbl'];
    let HospitalList = ItemList['hospital_tbl'];
    let LaundaryList = ItemList['laundary_tbl'];
    let MarketList = ItemList['market_tbl'];
    let OfficeList = ItemList['office_tbl'];
    let PostList = ItemList['post_tbl'];

    let Check = array;
    let OptionId;

    const [OnOffmar, setOnOffmar] = useState(Boolean(false));
    const [OnOffcaf, setOnOffcaf] = useState(Boolean(false));
    const [OnOfflan, setOnOfflan] = useState(Boolean(false));
    const [OnOffbog, setOnOffbog] = useState(Boolean(false));
    const [OnOffban, setOnOffban] = useState(Boolean(false));
    const [OnOffhos, setOnOffhos] = useState(Boolean(false));
    const [OnOffoffi, setOnOffoffi] = useState(Boolean(false));
    const [OnOffpos, setOnOffpos] = useState(Boolean(false));
    const [OnOffddar, setOnOffddar] = useState(Boolean(false));
    const [OnOffcctv, setOnOffcctv] = useState(Boolean(false));

    let bruh;
    const parentFunction = (x) => {
        Check = x
        OptionId = Check[0];
        bruh = Check[1];
        bruh = bruh + ""
        if (OptionId === "Convenience") {
            if (bruh === `1`) {
                setOnOffmar(true);
            }
            else {
                setOnOffmar(false);
            }
        }
        if (OptionId === "Cafe") {
            if (bruh === `1`) {
                setOnOffcaf(true);
            }
            else {
                setOnOffcaf(false);
            }
        }
        if (OptionId === "Laundry") {
            if (bruh === `1`) {
                setOnOfflan(true);
            }
            else {
                setOnOfflan(false);
            }
        }
        if (OptionId === "PublicHospital") {
            if (bruh === `1`) {
                setOnOffbog(true);
            }
            else {
                setOnOffbog(false);
            }
        }
        if (OptionId === "Bank") {
            if (bruh === `1`) {
                setOnOffban(true);
            }
            else {
                setOnOffban(false);
            }
        }
        if (OptionId === "Hospital") {
            if (bruh === `1`) {
                setOnOffhos(true);
            }
            else {
                setOnOffhos(false);
            }
        }
        if (OptionId === "Comunicate") {
            if (bruh === `1`) {
                setOnOffoffi(true);
            }
            else {
                setOnOffoffi(false);
            }
        }
        if (OptionId === "Post") {
            if (bruh === `1`) {
                setOnOffpos(true);
            }
            else {
                setOnOffpos(false);
            }
        }
        if (OptionId === "Cycle") {
            if (bruh === `1`) {
                setOnOffddar(true);
            }
            else {
                setOnOffddar(false);
            }
        }
        if (OptionId === "CCTV") {
            if (bruh === `1`) {
                setOnOffcctv(true);
            }
            else {
                setOnOffcctv(false);
            }
        }

    };

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
                        zIndex={10000}
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

                {OnOffmar && MarketList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: ConviMarker,
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
                {OnOffcaf && CafeList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: CafeMarker,
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
                {OnOfflan && LaundaryList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: LaunMarker,
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
                {OnOffbog && BogunList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: PubhoMarker,
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
                {OnOffban && BankList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: BankMarker,
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
                {OnOffhos && HospitalList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: HosMarker,
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
                {OnOffoffi && OfficeList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: CommuMarker,
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
                {OnOffpos && PostList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: PostMarker,
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
                {OnOffddar && DdarList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: CycleMarker,
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
                {OnOffcctv && CctvList.map((marker) => (
                    <MapMarker
                        key={marker}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}

                        image={{
                            src: CCTVMarker,
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
                    <OptionButton parentFunction={parentFunction} Id="Convenience" A={ConviOn} B={ConviOff} />
                    <OptionButton parentFunction={parentFunction} Id="Cafe" A={CafeOn} B={CafeOff} />
                    <OptionButton parentFunction={parentFunction} Id="Laundry" A={LaunOn} B={LaunOff} />
                    <OptionButton parentFunction={parentFunction} Id="PublicHospital" A={PubheOn} B={PubheOff} />
                    <OptionButton parentFunction={parentFunction} Id="Bank" A={BankOn} B={BankOff} />
                    <OptionButton parentFunction={parentFunction} Id="Hospital" A={HosOn} B={HosOff} />
                    <OptionButton parentFunction={parentFunction} Id="Comunicate" A={CommuOn} B={CommuOff} />
                    <OptionButton parentFunction={parentFunction} Id="Post" A={PostOn} B={PostOff} />
                    <OptionButton parentFunction={parentFunction} Id="Cycle" A={CycleOn} B={CycleOff} />
                    <OptionButton parentFunction={parentFunction} Id="CCTV" A={CCTVOn} B={CCTVOff} />

                </OptionButtonAreaA>

            </Map >
        </MapArea>

    );
}

export default OptionMap;