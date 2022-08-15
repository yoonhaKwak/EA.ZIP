import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function Filter(){
    const [addr1, setAddr1] = useState("논현로");

    const [TimeSectionMin, setTimeSectionMin] = useState(500000);
    const [mip, setMip] = useState(1000);
    const [mam, setMam] = useState(0);
    const [mim, setMim] = useState(0);

    const [data, setData] = useState('안됨');

    const Back = async () => {
        axios(
            {
                url: '/local/filter',
                method: 'post',
                data: {
                    // "addr1": search,
                    // "maxprice": map,
                    // "minprice": mip,
                    // "maxmonthly": mam,
                    // "minmonthly": mim,
                    // "category1": category1,
                    // "type": type,
                    // "room_number": room_number,
                    // "op1": options[0],
                    // "op2": options[1],
                    // "op3": options[2]
                    // search: getLatLng,
                    // minTime: mip,
                    // maxTime: map,
                    // minWalk: mil,
                    // maxWalk: mal,
                    // minTrans: mim,
                    // maxTrans: mam,
                    // destination: searchAddress

                    'd_lat' : 37.4882984,
                    'd_lng' : 127.0483885,
                    'TimeSectionMin' : 5000,
                    "TimeSectionMax" : 2000,
                    "WalkTimeMin" : 3000,
                    "WalkTimeMax" : 2000,
                    "TransferMin" : 5 ,
                    "TransferMax" : 3,
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