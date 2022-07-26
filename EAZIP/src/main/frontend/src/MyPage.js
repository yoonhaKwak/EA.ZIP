import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function MyPage() {
    // const [idx, setIdx] = useState(null);

    const onClick = async () => {
        axios(
            {
                url: '/history',
                method: 'post',
                data: {
                    'idx': '28832723',
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(function (response) {
            console.log("프론트에서 백으로 넘어감")
        });
    }
    return (
        <div>
            <div>
                <p> 마이페이지 test</p>
                <button onClick={onClick}>History</button>
            </div>
        </div>
    )
}
export default MyPage;