const CLIENT_ID = "e98b7c20443a64d2a2230260e7c2fa22";
//const REDIRECT_URI = "http://localhost:3000"

const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;