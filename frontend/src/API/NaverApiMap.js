import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";


export const NaverApiMap = (props) => {
  return (
    <RenderAfterNavermapsLoaded clientId={"dthfefzurc"}>
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style={{
            
            width: '100%',
            height: '100%'
          }}
          defaultCenter={{ lat: 37.4946012, lng: 127.027561 }}
          defaultZoom={19}

      />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverApiMap;