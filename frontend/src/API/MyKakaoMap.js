import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/Group 68.svg';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import MyListpage from "components/detail/MyListpage";
import ItemCard from "components/detail/ItemCard";

const { kakao } = window

function MyKakaoMap(data) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };

    const { state } = useLocation([]);
    // console.log(state);
    // for (const key in Object.keys(state)) {
    //     // console.log(state[key].lat, state[key].lng)
    // }
    const [markers, setMarkers] = useState([]);
    const [error, setError] = useState(null);

    const fetchMarkers = async () => {
        try {
            setMarkers(null);
            const response = await axios
                .get('./Gangnam15.json'); //강남매물 데이터 테스트 http://localhost:8080/react/dataList
            setMarkers(response.data);
        }
        catch (e) {
        }
    };


    useEffect(() => {
        fetchMarkers();
    }, []);
    console.log(markers)

    if (error) return <div>에러발생</div>;
    if (!markers) return null;
    return (
        <Map
            center={{
                lat: 37.4946012,
                lng: 127.027561
            }}
            style={{ width: "100%", height: "100%", maxHeight: "905px", maxWidth: "1415px" }}
            level={7}
            minLevel={2}
        >

            {markers.map((marker) => (
                <MapMarker
                    key={`${marker.lat},${marker.lng}`}
                    position={{
                        lat: marker.lat,
                        lng: marker.lng
                    }}
                    clickable={true}
                    onClick={openModal}
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
                </MapMarker>
            ))}
        </Map >
    );
}

export default MyKakaoMap;