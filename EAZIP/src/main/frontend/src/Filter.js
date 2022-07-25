import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Filter(){
    const [price, setPrice] = useState(500000);
    const [category, setCategory] = useState("빌라");
    const [type, setType] = useState(1);
    const [room, setRoom] = useState(3);
    const [data, setData] = useState('null');
    const Back = async () => {
        axios(
            {
                url: '/react/filter',
                method: 'post',
                data: {
                    "price": price,
                    "category": category,
                    "type": type,
                    "room": room
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(response => setData(JSON.stringify(response.data)))
    }

    return(
        <div>
            <button onClick={Back}>데이터 보내기</button>
            <p></p>
            <p></p>
            <div>
                {data}
            </div>
        </div>
    )
}
export default Filter;