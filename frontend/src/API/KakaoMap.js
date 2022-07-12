import { Map, MapMarker, MarkerClusterer, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/Group 68.svg';
import axios from "axios";

function KakaoMap() {
    const [markers, setMarkers] = useState([]);
    const [error, setError] = useState(null);

    const fetchMarkers = async () => {
        try {
            setError(null);
            setMarkers(null);
            const response = await axios
                .get('./gangnam.json');
            setMarkers(response.data);
        }
        catch (e) {
            setError(e);
        }
    };


    useEffect(() => {
        fetchMarkers();
    }, []);

    if (error) return <div>에러발생</div>;
    if (!markers) return null;

    return (
        <Map
            center={{ lat: 37.4946012, lng: 127.027561 }}
            style={{ width: "1415px", height: "865px" }}
            level={7}
        >
            <MarkerClusterer
                averageCenter={true}
                minLevel={2}
                disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
                calculator={[10, 50, 150]} // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
                // minClusterSize='5'
                onClusterclick={() => { alert(console.log()) }}
                styles={[{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                    width: '40px', height: '40px',
                    background: 'rgba(255, 173, 49, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 173, 49)',
                    color: 'rgba(255, 173, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    lineHeight: '40px'
                },
                {
                    width: '60px', height: '60px',
                    background: 'rgba(255, 123, 0, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 123, 0)',
                    color: 'rgba(255, 153, 0)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '60px'
                },
                {
                    width: '80px', height: '80px',
                    background: 'rgba(255, 123, 49, .3)',
                    borderRadius: '100px',
                    border: 'solid 3px rgba(255, 123, 49)',
                    color: 'rgba(255, 123, 49)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '80px'
                }
                ]}
            >
                {markers.map((marker) => (
                    <MapMarker
                        key={`${marker.WGS84위도}-${marker.WGS84경도}`}
                        position={{
                            lat: marker.WGS84위도,
                            lng: marker.WGS84경도,
                        }}
                        onClick={() => { alert(console.log('메물상세정보')) }}
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
            </MarkerClusterer>
        </Map>
    );
}

export default KakaoMap;