import axios from "axios"
import { getBaseurl } from "./getBaseurl"

export const onSignup = async (name,username,password,department,email) => {
    const body = {
        name:name,
        username,username,
        password,password,
        department:department,
        email:email
    }
    console.log(body);
    await axios.post(getBaseurl()+'/teacher',body)
    .then(res=>{
        console.log(res);
        alert('성공');
        window.location.href = "/main/all"
    })
    .catch(err=>{
        console.log(err.response);
        alert('실패');
    })
}