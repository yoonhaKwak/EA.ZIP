import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Filter(){
    const [addr1, setAddr1] = useState("논현로");
    const [type, setType] = useState(['2', '3']);
    const [category, setCategory] = useState(['1']);
    const [room, setRoom] = useState(['1']);

    const [op1, setOp1] = useState("sc_office");
    const [op2, setOp2] = useState("sc_cafe");
    const [op3, setOp3] = useState("sc_hospital");

    const [map, setMap] = useState(500000);
    const [mip, setMip] = useState(1000);
    const [mam, setMam] = useState(0);
    const [mim, setMim] = useState(0);

    const [data, setData] = useState('안됨');

    const Back = async () => {
        axios(
            {
                url: '/react/filter',
                method: 'post',
                data: {
                    "addr1" : addr1,

                    "category1" : category,
                    "type" : type,
                    "room_number" : room,

                    "maxprice" : map,
                    "minprice" : mip,
                    "maxmonthly" : mam,
                    "minmonthly" : mim,

                    "op1" : op1,
                    "op2" : op2,
                    "op3" : op3,
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