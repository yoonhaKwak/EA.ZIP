import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

const { kakao } = window

function Test() {
    const [state, setState] = useState({
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        isPanto: true,
    });
    const [searchAddress, SetSearchAddress] = useState();

    const SearchMap = () => {
        const ps = new kakao.maps.services.Places()
        const placesSearchCB = function (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                const newSearch = data[0]
                setState({
                    center: { lat: newSearch.y, lng: newSearch.x }
                })
            }
        };
        ps.keywordSearch(`${searchAddress}`, placesSearchCB);
    }

    const handleSearchAddress = (e) => {
        SetSearchAddress(e.target.value)
    }
    return (
        <div>
            <Map
                center={state.center}
                isPanto={state.isPanto}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "450px",
                }}
                level={3} // 지도의 확대 레벨
            />
            <div>
                <input onChange={handleSearchAddress}></input>
                <button onClick={SearchMap}>클릭</button>
            </div>
        </div>
    );
}

export default Test;


