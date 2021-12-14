import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllNotice } from "../../../functions/getAllNotice";
import { getBaseurl } from "../../../functions/getBaseurl";
import { usePath } from "../../../functions/usePath";
import EditNotice from "../../Mypage/index copy";
import EachBlock from "./block";
import { S } from "./style";

function BlockList({array,ismypage,profile}){
    useEffect(()=>{
        console.log('arr',array);
        setList(array);
    })
    const [noticelist, setList] = useState(array);
    const [onEditStatus, setOnEdit] = useState(false);
    const [info, setInfo] = useState();
    
    const header = {
        Authorization:"Bearer "+window.localStorage.getItem('access_Token')
    }

    const onRemove = (id) => {

    }
    const onEdit = (id) => {
        setOnEdit(false)
        setOnEdit(true);
    }
    const onDelete = (id) => {
        axios.delete(getBaseurl()+`/notice/${id}`,{headers:header})
        .then(res=>{
            alert('삭제되었습니다.');
            window.location.href = window.location.pathname;
        })
    }

    if(ismypage){
        return(
            <>
            {

                noticelist?
                
                noticelist.map((value,index)=>{
                    console.log('value:',value);
                    return <EachBlock onDelete={onDelete} setInfo={setInfo} onEdit={onEdit} id={value.notice_id} images={value.images} info={value} ismypage={true} profile={profile}/> 
                }
                //value = 
                )
                :<></>
            }
            <S.Text>
                내 글<p>
                    {noticelist.length}
                </p>
            </S.Text>
            {
                onEditStatus?
                <EditNotice profile={profile} info={info} setOnEdit={setOnEdit} setInfo={setInfo} />
:<></>
            }
            </>
        )
    }
    else{
   
    return(
        <>

        {
            noticelist?
            
            noticelist.map((value,index)=>{
                console.log('value:',value);
                return <EachBlock images={value.images} info={value} profile={profile}/>
            }
            //value = 
            )
            :<></>
        }
        </>
    )
    }
}


export default BlockList;