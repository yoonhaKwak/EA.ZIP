import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from 'react';
import SearchMarker from '../styles/icons/Group 68.svg';
import axios from "axios";
import jQuery from "jquery";
import KakaoMap from "./KakaoMap";

const { kakao } = window
const KakaoMapTest = ({ searchPlace }) => {

    //검색결과 배열에 달아준다.
    const [Places, setPlaces] = useState([])

    useEffect(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
        const container = document.getElementById('myMap')
        const options = {
            center: new kakao.maps.LatLng(37.4946012, 127.027561),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options)

        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(searchPlace, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)
                //페이지 목록 보여주는 displayPagination() 추가
                displayPagination(pagination)
                setPlaces(data)
            }
        }
        //검색결과 목록 하단에 페이지 번호 표시
        function displayPagination(pagination) {
            var paginationEl = document.getElementById('pagination'),
                fragment = document.createDocumentFragment(),
                i

            // 기존에 추가된 페이지 번호 삭제
            while (paginationEl.hasChildNodes()) {
                paginationEl.removeChild(paginationEl.lastChild)
            }

            for (i = 1; i <= pagination.last; i++) {
                var el = document.createElement('a')
                el.href = '#'
                el.innerHTML = i

                if (i === pagination.current) {
                    el.className = 'on'
                } else {
                    el.onclick = (function (i) {
                        return function () {
                            pagination.gotoPage(i)
                        }
                    })(i)
                }

                fragment.appendChild(el)
            }
            paginationEl.appendChild(fragment)
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:14px;font-size:20px;">' + place.y + ' , ' + place.x + '</div>')
                infowindow.open(map, marker)
            })
        }
    }, [searchPlace])

    return (
        <div>
            <div
                id="myMap"
                style={{
                    width: '1415px',
                    height: '865px',
                }}
            ></div>
            <div id="result-list">
                {Places.map((item, i) => (
                    <div key={i} style={{ marginTop: '20px' }}>
                        <span>{i + 1}</span>
                        <div>
                            <h5>{item.place_name}</h5>
                            {item.road_address_name ? (
                                <div>
                                    <span>{item.road_address_name}</span>
                                    <span>{item.address_name}</span>
                                </div>
                            ) : (
                                <span>{item.address_name}</span>
                            )}
                            <span>{item.phone}</span>
                        </div>
                    </div>
                ))}
                <div id="pagination"></div>
            </div>
        </div>

    )
}

export default KakaoMapTest;