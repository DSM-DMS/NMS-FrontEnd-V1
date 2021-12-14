import axios from "axios"
import { getBaseurl } from "./getBaseurl"

export const getAllNotice = async() => {

    console.log(window.localStorage.getItem('access_Token'));
    const header = {
        Authorization:"Bearer "+window.localStorage.getItem('access_Token')
    }
    await axios.get(getBaseurl()+'/notice/all',{headers:header})
    .then(res=>{
        return(res);
    })
    .catch(err=>console.log(err))
    

    
    
}