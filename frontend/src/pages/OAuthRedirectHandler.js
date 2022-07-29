import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, Link } from 'react-router-dom';

const Back = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code");
    const [session, setSession] = useState('null')
    useEffect(()=> {
        console.log("코드 : "+code);
    axios(
        {
            url: '/member/login',
            method: 'post',
            data: {
                "code" : code
            },
            baseURL :'http://localhost:8080'
        }
    ).then(function (response) {
        console.log("post")
        navigate('/', { replace: false })

},[]);
})}
const OAuthRedirectHandler = () =>{
    return(<div>
        <Back />
    </div>)
}
export default OAuthRedirectHandler;