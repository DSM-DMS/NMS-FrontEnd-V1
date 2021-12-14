import axios from "axios";
import { getBaseurl } from "./getBaseurl";

export function sendEmail(email){

    const body = {
        email:email,
    }
    axios.post(getBaseurl()+'/email',body)
    .then(res=>{
        console.log(res);
        console.log('요청 보냄');

    })
    .catch(err=>{
        console.log(err.response);

    })
}
export async function verfyEmail(code,ref){

    const body = {
        email:'justinlee05@dsm.hs.kr',
        code:code
    }

    await axios.put(getBaseurl()+'/email',body)
    .then(res=>{
        console.log(res);
        ref.current = 1;

    })
    .catch(err=>{
        console.log(err.response);
        if(err.response.status === 409){
            ref.current = 1;
        }

    })
    console.log(ref.current)
    return ref.current;
}