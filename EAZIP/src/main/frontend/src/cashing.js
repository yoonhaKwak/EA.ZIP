import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Cashing() {
    // const [idx, setIdx] = useState(null);
    const [data, setData] = useState('안됨');


    const onClick = async () => {
        axios(
            {
                // 목적지 선택시 목적지에 대한 위도경도를 받을 부분,
                // 해당 위도 경도를 controller로 넘김
                url: '/cash/cashing',
                method: 'post',
                data: {
                    'lat': '37.510565',
                    'lng': '127.051533',
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(response => setData(JSON.stringify(response.data)))
        {
            console.log("프론트에서 백으로 넘어감")
        };



    }
    return (
        <div>
            <div>
                <p> Cashing test</p>
                <button onClick={onClick}>위도경도값 넘기기</button>
                <div>
                    {data}
                </div>
            </div>
        </div>
    )
}
export default Cashing;