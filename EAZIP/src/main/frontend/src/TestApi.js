import React from "react";
import axios from "axios";
import {useState} from "react";

function TestApi() {
    const [data, setData] = useState(null);
    const [walk, setWalk] = useState('null');
    const [bus, setBus] = useState('null');
    const [subway, setSubway] = useState('null');
    const [time, setTime] = useState('null');
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX=127.0272405799&EY=37.61232432639&apiKey=j7A34MnqbWGfZQwWtVRUtqkal9YXPsGl%2BQGMho8v2ag',
            );
            console.log("교통API 가져옴:)")
            setData(response.data.result.path[0].info)
            setWalk(response.data.result.path[0].info.totalWalk)
            setBus(response.data.result.path[0].info.busTransitCount)
            setSubway(response.data.result.path[0].info.subwayTransitCount)
            setTime(response.data.result.path[0].info.totalTime)
        } catch (e) {
            console.log(e)
        }
    };
    const Back = async () => {
        axios(
            {
                url: '/react/api',
                method: 'post',
                data: {
                    'totalWalk': walk,
                    'busTransitCount': bus,
                    'subwayTransitCount' : subway,
                    'totalTime': time
                },
                withCredentials : true,
            }
        ).then(function (response) {
            console.log("WOW 드디어 8080 됐다~")
        });
    }
    return(
        <div>
            <div>
                <button onClick={onClick}>교통 API</button>
            </div>
            <li>도보거리 : {walk}m</li>
            <li>환승횟수 : {bus+subway -1}회</li>
            <li>소요시간 : {time}분</li>
            <div>
                <button onClick={()=>Back()}>보내기</button>
            </div>
        </div>
    )

}

export default TestApi;