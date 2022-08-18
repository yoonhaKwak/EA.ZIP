import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import React, { useEffect, useState, createContext, Suspense } from 'react';
import SearchMarker from '../styles/icons/SearchMarker.svg';
import TargetMarker from '../styles/icons/TargetMarker(1).svg';
import { useLocation } from "react-router-dom";
import ItemDetailMarker from "../components/part/ItemDetailMarker";


const { kakao } = window
// document.addEventListener("touchstart", handler, {
//     capture: false,
//     once: false,
//     passive: false
// });
function KakaoMap() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };
    const { state } = useLocation([]);

    const [sendData, setSendData] = useState();
    const [postmarkers, setPostMarkers] = useState([]);
    const [변수, set변수] = useState([0, 0]);
    let filteredN = JSON.parse(sessionStorage.filteredN);
    console.log(filteredN);
    let filteredT = JSON.parse(sessionStorage.filteredT);
    let Destination = filteredT.data.state.destination;
    let Rlat = parseFloat(filteredT.data.state.search.lat);
    let Rlng = parseFloat(filteredT.data.state.search.lng);
    // 위에 3줄은 지역추천에만 적용된다.

    const centerlat = state[0].lat;
    const centerlng = state[0].lng;
    return (
        <Map
            center={{
                lat: centerlat,
                lng: centerlng
            }}
            isPanto={true}
            style={{ width: "100%", height: "100%", maxHeight: "905px", maxWidth: "1415px" }}
            level={8}
            minLevel={3}
        >
            {filteredN === 0 ?
                <MapMarker
                    key={Destination}
                    position={{
                        lat: Rlat,
                        lng: Rlng
                    }}
                    zIndex={100}
                    image={{
                        src: TargetMarker,
                        size: {
                            width: 60,
                            height: 50
                        },
                        options: {
                            offset: {
                                x: 30,
                                y: 45
                            },
                        },
                    }}
                /> : null
            }
            <MarkerClusterer
                gridSize={80}
                averageCenter={true}
                minLevel={5}
                disableClickZoom={true}
                calculator={[5, 10, 20]} // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
                styles={[{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                    width: '70px', height: '70px',
                    background: 'rgba(255, 173, 49, .3)',
                    borderRadius: '70px',
                    border: 'solid 3px rgba(255, 173, 49)',
                    color: 'rgba(255, 173, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    lineHeight: '70px'
                },
                {
                    width: '70px', height: '70px',
                    background: 'rgba(255, 123, 0, .3)',
                    borderRadius: '70px',
                    border: 'solid 3px rgba(255, 123, 0)',
                    color: 'rgba(255, 153, 0)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '70px'
                },
                {
                    width: '70px', height: '70px',
                    background: 'rgba(255, 123, 49, .3)',
                    borderRadius: '70px',
                    border: 'solid 3px rgba(255, 123, 49)',
                    color: 'rgba(255, 123, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '70px'
                }
                ]}
                onClusterclick={(clusters, marker) => { set변수(marker.getBounds()); console.log(marker.getMarkers().length) }} // putdata(); 일시.

            >
                {state.map((marker) => (
                    <MapMarker
                        key={marker.idx}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}
                        clickable={true}
                        onClick={() => {
                            openModal()
                            setSendData(marker)
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

                <ItemDetailMarker open={modalOpen} close={closeModal} ItemData={sendData} />
            </MarkerClusterer>
        </Map >
    );
}

export default KakaoMap;