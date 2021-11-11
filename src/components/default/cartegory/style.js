import styled from "styled-components";

export const S = {
    Cartegory:styled.div`
    width:276px;
    border-top:0.5px solid #B7B7B7;
    `,
    CartegoryWrapper:styled.div`
        width:100%;
        height:40px;
        border-bottom:0.5px solid #B7B7B7;
        display:flex;
        flex-direction:row;
        align-items:center;
        color:#707070;
    `,
    IconWrapper:styled.div`
    width:12px;
    height:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    
    margin-left:${props=>props.grade === 2? 28 : 16}px;
        margin-right:8px;
    `,
    Icons:styled.img`
        
    `,
    CartegoryText:styled.p`
        
        font-size:16px;
    `,

}