import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function MyPage() {
    // const [idx, setIdx] = useState(null);

    const onhistory = async () => {
        axios(
            {
                url: '/history',
                method: 'post',
                data: {
                    'idx': '28832666',
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(function (response) {
            console.log("프론트에서 백으로 넘어감")
        });
    }

    const onfavorite = async () => {
        axios(
            {
                url: '/favorite',
                method: 'post',
                data: {
                    'idx': '28832745',
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
                <button onClick={onhistory}>History</button>
                <br></br>
                <button onClick={onfavorite}>Favorite</button>
            </div>
        </div>


    )
}
export default MyPage;