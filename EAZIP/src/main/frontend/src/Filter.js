import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Filter(){
    const [price, setPrice] = useState(50000);
    const [category, setCategory] = useState("오피스텔");
    const [type, setType] = useState(1);
    const [room, setRoom] = useState(1);
    const [data, setData] = useState('null');
    const Back = async () => {
        axios(
            {
                url: '/react/filter',
                method: 'post',
                data: {
                    "price" : price,
                    "category" : category,
                    "type" : type,
                    "room" : room
                },
                baseURL :'http://localhost:8080'
            }
        ).then(function (response) {
            console.log("WOW 드디어 8080 됐다~")
        });
    }
    const Front = () => {
            axios.get('/react/filter')
                .then(response => setData(response.data))
                .catch(error => console.log(error))

    }
    return(
        <div>
            <button onClick={Back}>데이터 보내기</button>
            <p></p>
            <button onClick={Front}>가져오기</button>
            <p></p>
            <div>
                {data}
            </div>
        </div>
    )
}
export default Filter;