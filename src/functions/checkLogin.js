import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getBaseurl } from "./getBaseurl";

export const checkLogin = async () => {
    console.log('체크중...');


    
    if(!window.localStorage.getItem('access')){
        alert('로그인하십쇼.');
        return;
    }
    else{
        if(!window.localStorage.getItem('refresh_Token')){
            alert('로그인하십쇼');
            return;
        }
        const header = {
            "X-Refresh-Token":window.localStorage.getItem('refresh_Token')
        } 
        console.log(header)
        await axios.put(getBaseurl()+'/teacher/auth',{},{headers:header})
        .then(async  (res)=> {
            console.log('refresh')
            console.log(res);
            const access = res.data.access_token;
            const refresh = res.data.refresh_token;
             window.localStorage.setItem('access_Token',access);
             window.localStorage.setItem('refresh_Token',refresh);
             
            
            
        })
        .catch(err=>{
            console.log(err);
            alert('로그인하십쇼');
            window.location.href="/login";
            return;
        })
    }
}