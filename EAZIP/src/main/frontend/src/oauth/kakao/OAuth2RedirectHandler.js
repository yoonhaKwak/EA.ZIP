import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions} from "../../Redux/modules/user";

const OAuth2RedirectHandler = (props) => {
    const dispatch = useDispatch();

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return (
        <div>
                <h2>잠시만 기다려 주세요! 로그인 중입니다.</h2>
        </div>
    )

}
export default OAuth2RedirectHandler;