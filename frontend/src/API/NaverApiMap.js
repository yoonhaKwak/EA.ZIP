import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Circle } from "react-naver-maps";
import SearchMarker from '../styles/icons/SearchMarker.svg';
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import axios from "axios";


export const NaverApiMap = () => {

  const navermaps = window.naver.maps;


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
        defaultZoom={15}
      >
        <Marker
          key={1}
          position={new navermaps.LatLng(37.4946012, 127.027561)}
          animation={0} // 마커 애니매이션 부분
          icon={{ // 원하는 아이콘 설정 부분
            url: SearchMarker,
            size: { width: 50, height: 40 },
            scaledSize: { width: 50, height: 40 },
            anchor: { x: 25, y: 40 }
          }}
        />
      </NaverMap>

    </RenderAfterNavermapsLoaded>
  );
};



export default NaverApiMap;