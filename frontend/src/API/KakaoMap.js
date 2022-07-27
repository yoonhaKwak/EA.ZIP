import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/SearchMarker.svg';
import axios from "axios";
import { useLocation } from "react-router-dom";

const { kakao } = window

function KakaoMap() {
    const location = useLocation();
    console.log('state', location.state);
    const [markers, setMarkers] = useState([]);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    // const [type, setType] = useState(1);
    // const [category, setCategory] = useState("빌라/연립");
    // const [room, setRoom] = useState(3);

    // const [map, setMap] = useState(500000);
    // const getPrice = (max) => {
    //     setMap(max);
    // }

    // const [mip, setMip] = useState(100);
    // const getMiPrice = (min) => {
    //     setMip(min);
    // }
    // //전세/매매/보증금 구간

    // const [mam, setMam] = useState(0);
    // const [mim, setMim] = useState(0);
    // //월세 구간

    // const [data, setData] = useState(null);
    // // const [op1, setOp1] = useState()
    // // const [op2, setOp2] = useState()
    // // const [op3, setOp3] = useState()
    // const fetchMarkers = async () => {
    //     axios({
    //         method: 'post',
    //         url: '/react/filter',
    //         data: {
    //             "map": map,
    //             "mip": mip,
    //             "mam": mam,
    //             "mim": mim,
    //             "category": category,
    //             "type": type,
    //             "room": room
    //             // "op1" : op1,
    //             // "op2" : op2,
    //             // "op3" : op3,
    //         },
    //         baseURL: 'http://localhost:8080'
    //     }
    //     ).then(response => setData(JSON.stringify(response.data)))
    // }

    const fetchMarkers = async () => {
        try {
            setMarkers(null);
            const response = await axios
                .get('./Gangnam15.json'); //백엔드 강남매물 데이터 테스트 http://localhost:8080/react/dataList
            setMarkers(response.data);
        }
        catch (e) {
        }
    };


    useEffect(() => {
        fetchMarkers();
    }, []);

    if (error) return <div>에러발생</div>;
    if (!markers) return null;



    return (
        <Map
            center={{
                lat: 37.4946012,
                lng: 127.027561
            }}
            style={{ width: "1415px", height: "865px" }}
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
                {markers.map((marker) => (
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