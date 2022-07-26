import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Filter(){
    const [type, setType] = useState(1);
    const [category, setCategory] = useState("원룸");
    const [room, setRoom] = useState(1);
    const [map, setMap] = useState(50000);
    const [mip, setMip] = useState(100);
    const [mam, setMam] = useState(0);
    const [mim, setMim] = useState(0);

    // const [op1, setOp1] = useState()
    // const [op2, setOp2] = useState()
    // const [op3, setOp3] = useState()

    const [data, setData] = useState('안됨');

    const Back = async () => {
        axios(
            {
                url: '/react/filter',
                method: 'post',
                data: {
                    "map" : map,
                    "mip" : mip,
                    "mam" : mam,
                    "mim" : mim,
                    "category" : category,
                    "type" : type,
                    "room" : room


                    // "op1" : op1,
                    // "op2" : op2,
                    // "op3" : op3,

                },
                baseURL :'http://localhost:8080'
            }
        ).then(response => setData(JSON.stringify(response.data)))
        {
            console.log("WOW 드디어 8080 됐다~")
        };
    }

    return(
        <div>
            <button onClick={Back}>데이터 보내기</button>
            <div>
                <p>테스트</p>
                {data}
            </div>
        </div>
    )
}
export default Filter;