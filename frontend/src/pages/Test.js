import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

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
    const handlekeypress = e => {
        if (e.key === 'Enter') {
            SearchMap();
            console.log(state.center);
            console.log(searchAddress);
        }
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
                    height: "900px",
                }}
                level={3} // 지도의 확대 레벨
            >
                <MapMarker
                    position={{
                        lat: state.center.lat,
                        lng: state.center.lng
                    }}
                />
            </Map>
            <div>
                <input onChange={handleSearchAddress} onKeyPress={handlekeypress} ></input>
            </div>
        </div>
    );
}

export default Test;


