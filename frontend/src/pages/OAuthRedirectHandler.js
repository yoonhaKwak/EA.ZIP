import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { data } from "jquery";

const Back = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code");
    useEffect(()=> {
        console.log("코드 : "+code);
    axios(
        {
            
            url: '/member/login',
            method: 'post',
            withCredentials : true,
            data: {
                "code" : code
            },
            baseURL :'http://localhost:8080'
        }
    ).then(function (response){
        console.log("post")
        navigate('/', { replace: false })
        sessionStorage.setItem("userId",response.data.userId)
        console.log(sessionStorage.getItem("userId"))
    });
},[]);
}
const OAuthRedirectHandler = () =>{
    return(
        <div>
            <Back/>
        </div>
    );
}
export default OAuthRedirectHandler;