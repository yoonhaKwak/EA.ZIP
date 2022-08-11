import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { data } from "jquery";

const Back = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code");
    useEffect(() => {
        axios(
            {

                url: '/member/login',
                method: 'post',
                withCredentials: true,
                data: {
                    "code": code
                },
                baseURL: 'http://localhost:8080'
            }
        ).then(function (response) {
            navigate('/', { replace: false })
            sessionStorage.setItem("userId", response.data.userId)
            sessionStorage.setItem("token", response.data.token)
            console.log(response.data)
        });
    }, []);
}
const OAuthRedirectHandler = () => {
    return (
        <div>
            <Back />
        </div>
    );
}
export default OAuthRedirectHandler;