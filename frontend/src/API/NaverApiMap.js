import React, { useEffect, useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Circle } from "react-naver-maps";
import SearchMarker from '../styles/icons/SearchMarker.svg';
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import cluster1 from '../styles/icons/Group 53.svg';
import cluster2 from '../styles/icons/Group 54.svg';
import cluster3 from '../styles/icons/Group 55.svg';
import styled from "styled-components";


export const NaverApiMap = () => {

  const navermaps = window.naver.maps;
  const [markers, setMarkers] = useState(null);
  const [error, setError] = useState(null);

  const fetchMarkers = async () => {
    try {
      setError(null);
      setMarkers(null);
      const response = await axios
        .get('./Sample.json');
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
    <RenderAfterNavermapsLoaded clientId={"dthfefzurc"}>
      <NaverMap

        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style={{
          zIndex: 6,
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
        defaultCenter={{ lat: 37.4946012, lng: 127.027561 }}
        defaultZoom={13}
      >
        {/* {markers.map(marker => (
          <Marker
            key={marker}
            position={new navermaps.LatLng(marker.WGS84위도, marker.WGS84경도)}
            animation={0} // 마커 애니매이션 부분
            icon={{ // 원하는 아이콘 설정 부분
              url: SearchMarker,
              size: { width: 50, height: 40 },
              scaledSize: { width: 50, height: 40 },
              anchor: { x: 25, y: 40 },
            }}
          />
        ))} */}
        {markers.map(marker => (
          <Circle
            key={marker}
            center={new navermaps.LatLng(marker.WGS84위도, marker.WGS84경도)}
            radius={100}
            fillOpacity={0.5}
            fillColor={'#FF7B31'}
            strokeColor={'#FF7B31'}
            clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
          />

        ))}
      </NaverMap>

    </RenderAfterNavermapsLoaded>
  );
};



export default NaverApiMap;