import React from "react";

function Login(){

    const CLIENT_ID = "e98b7c20443a64d2a2230260e7c2fa22";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

    const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?client_id="+`${CLIENT_ID}`+"&redirect_uri="+`${REDIRECT_URI}`+"&response_type=code";

    return(
        <button onClick={()=>window.open(`${KAKAO_AUTH_URL}`)}>카카오 로그인</button>
    )
}
export default Login;