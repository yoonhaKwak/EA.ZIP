import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/SearchMarker.svg';
import axios from "axios";
import { useLocation } from "react-router-dom";

const { kakao } = window

function KakaoMap(data) {
    const { state } = useLocation([]);
    const [isOpen, setIsOpen] = useState(false);
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
    return (
        <Map
            center={{
                lat: 37.4946012,
                lng: 127.027561
            }}
            style={{ width: "100%", height: "100%", maxHeight: "905px", maxWidth: "1415px" }}
            level={8}
            minLevel={2}
        >
            <MarkerClusterer
                gridSize={80}
                averageCenter={true}
                minLevel={2}
                disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
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
            >
                {state.map((marker) => (
                    <MapMarker
                        key={`${marker.lat},${marker.lng}`}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}
                        clickable={true}
                        onClick={() => setIsOpen(true)}
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
                        }}>
                        <div style={{ padding: "14px", fontSize: "20px" }}>place.y , place.x</div>
                    </MapMarker>
                ))}
            </MarkerClusterer>
        </Map >

    );
}

export default KakaoMap;