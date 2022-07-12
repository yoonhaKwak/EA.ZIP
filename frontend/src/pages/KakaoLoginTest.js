import React from "react";
import { IconButton } from "@material-ui/core";

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=e98b7c20443a64d2a2230260e7c2fa22\
&redirect_uri=http://localhost:8080/login/oauth2/code/kakao&response_type=code`;

const KakaoLoginButton = () => {
    return (
        <IconButton>
            <a href={loginUri} rel="noopener noreferrer">
                <img src="/kakao_login_medium_narrow.png" />
            </a>
        </IconButton>
    );
};

export default KakaoLoginButton;