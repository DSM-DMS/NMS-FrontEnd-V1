import axios from "axios"
import { getBaseurl } from "./getBaseurl"

export const onLogin = async (email,password) => {

    let result = 0;
    const body = {
        id:email,
        password:password
    }
    console.log(body);
    await axios.post(getBaseurl()+'/teacher/auth',body)
    .then(
        res=>{
            console.log(res);
            const access = res.data.access_token;
            const refresh = res.data.refresh_token;
            window.localStorage.setItem("access_Token",access);
            window.localStorage.setItem("refresh_Token",refresh);
            result = 1;
            alert('로그인되었습니다.')
        }
    )
    .catch(err=>{
        console.log(err);
        alert('실패')
    })
    return result;

}