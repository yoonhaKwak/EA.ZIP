import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function TestApi() {
    const [data, setData] = useState(null);
    const [walk, setWalk] = useState('null');
    const [bus, setBus] = useState('null');
    const [subway, setSubway] = useState('null');
    const [time, setTime] = useState('null');
    const [lat, setLat] = useState('null');
    const [lng, setLng] = useState('null');
    const [i, setI] = useState(0);
    const [idx , setIdx] = useState('null');

    useEffect( () => {
        axios.get('/react/coordinate')
            .then(response => setLat(response.data[i].lat)&setIdx(response.data[i].idx)&setLng(response.data[i].lng))
            .catch(error => console.log(error))
    });

    const Up = async () => {
        setI(i+1)
    }

    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX='+`${lng}`+'&EY='+`${lat}`+'&apiKey=j7A34MnqbWGfZQwWtVRUtqkal9YXPsGl%2BQGMho8v2ag',
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
                url: '/react/httpapi',
                method: 'post',
                data: {
                    'lat' : '37.4882984',
                    'lng' : '127.0483885'
                },
                baseURL :'http://localhost:8080'
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
            <button onClick={()=>Up()}>다음</button>
            <div>
                <button onClick={()=>Back()}>보내기</button>
            </div>

            <div>
                <h2>{lat}</h2>
                <hr/>
                <h2>{lng}</h2>
            </div>
        </div>
    )
}

export default TestApi;