import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import React, { useEffect, useState, createContext, Suspense } from 'react';
import SearchMarker from '../styles/icons/SearchMarker.svg';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import ItemDetailMarker from "../components/part/ItemDetailMarker";
import styled from "styled-components";
import { param } from "jquery";


const { kakao } = window

function KakaoMap() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };
    const { state } = useLocation([]);

    const [sendData, setSendData] = useState();
    const [postmarkers, setPostMarkers] = useState([]);
    // useEffect(() => {
    //     setSendData(clusterPositionsData.positions);
    // })
    // console.log(state);
    // for (const key in Object.keys(state)) {
    //     // console.log(state[key].lat, state[key].lng)
    // }
    // const [markers, setMarkers] = useState([]);
    // const [error, setError] = useState(null);

    // const fetchMarkers = async () => {
    //     try {
    //         setMarkers(null);
    //         const response = await axios
    //             .get('./Gangnam15.json'); //백엔드 강남매물 데이터 테스트 http://localhost:8080/react/dataList
    //         setMarkers(response.data);
    //         console.log(response.data);
    //     }
    //     catch (e) {
    //     }
    // };


    // useEffect(() => {
    //     fetchMarkers();
    // }, []);
    // console.log(markers)

    // if (error) return <div>에러발생</div>;
    // if (!markers) return null;

    // var markers = cluster.getMarkers();
    // for (var idx = 0; idx < markers.length; idx++) {
    //     console.log(markers[idx].getPosition());
    // }
    // kakao.maps.event.addListener(clusterer, 'clusterclick', function (cluster) {
    //     console.log(cluster.getMarkers());

    // });
    const centerlat = state[0].lat;
    const centerlng = state[0].lng;
    return (
        <Map
            center={{
                lat: centerlat,
                lng: centerlng
            }}
            // 기존에 쓰던 센터 지우면안된다.
            // center={{
            //     lat: centerlat,
            //     lng: centerlng
            // }}
            isPanto={true}
            style={{ width: "100%", height: "100%", maxHeight: "905px", maxWidth: "1415px" }}
            level={8}
            minLevel={3}
        >
            <MarkerClusterer
                gridSize={80}
                averageCenter={true}
                minLevel={5}
                disableClickZoom={true}
                calculator={[5, 10, 20]} // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
                styles={[{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                    width: '100px', height: '100px',
                    background: 'rgba(255, 173, 49, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 173, 49)',
                    color: 'rgba(255, 173, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    lineHeight: '100px'
                },
                {
                    width: '100px', height: '100px',
                    background: 'rgba(255, 123, 0, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 123, 0)',
                    color: 'rgba(255, 153, 0)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '100px'
                },
                {
                    width: '100px', height: '100px',
                    background: 'rgba(255, 123, 49, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 123, 49)',
                    color: 'rgba(255, 123, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '100px'
                }
                ]}
                onClusterclick={(clusters, marker) => { console.log(marker.getMarkers()) }}
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