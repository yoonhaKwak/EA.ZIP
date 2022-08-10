import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/Group 68.svg';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import MyListpage from "components/detail/MyListpage";
import ItemCard from "components/detail/ItemCard";
import ItemDetailMarker from "components/part/ItemDetailMarker";

const { kakao } = window

function MyKakaoMap(data) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };
    const { state } = useLocation([]);

    const [sendData, setSendData] = useState();
    // console.log(state);
    // for (const key in Object.keys(state)) {
    //     // console.log(state[key].lat, state[key].lng)
    // }
    const [markers, setMarkers] = useState([]);
    const [error, setError] = useState(null);

    // axios.get('https://localhost:8080/getfavorite').then((Response) => {
    //     console.log(Response.data);
    // }).catch((Error) => {
    //     console.log(Error);
    // })

    const fetchMarkers = async () => {
        try {
            setMarkers(null);
            const response = await axios
                .get('http://localhost:8080/getfavorite');
            console.log(response.data);
            setMarkers(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMarkers();
    }, []);
    console.log()

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
                    }} />
            ))}
            <ItemDetailMarker open={modalOpen} close={closeModal} ItemData={sendData} />
        </Map >
    );
}

export default MyKakaoMap;