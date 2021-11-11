import styled from "styled-components";

export const S = {
    Header:styled.div`
        position:fixed;
        height:60px;
        width:100%;
        border-bottom:1px solid #707070;
        top:0px;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:white;
        z-index:2;
        

    `,
    HeadWrapper:styled.div`
        width:62.5%;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
    `,
    Logo:styled.img`
    
    `,

    LoginText:styled.span`
    font-size:13px;
    color:#707070;
    `,
    BodyWrapper:styled.div`
    width:100%;
    height:calc(100vh - 60px);
    top:60px;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    

    `,
    Body:styled.div`
    width:62.5%;
    height:calc(100vh - 160px);
    position:absolute;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `,
    SideWrapper:styled.div`
    width:276px;
    height:100%;
    padding-top:100px;
    `,
    ProfileBox:styled.div`
    border:0.5px solid #707070;
    box-sizing:border-box;
    width:100%;
    height:126px;
    display:flex;
    align-items:center;
        border-radius:15px;
    `,
    ProfileImg:styled.img`
        width:70px;
        height:70px;
        border-radius:100%;
        position:absolute;
        left:24px;
    `,
    ProfileInfo:styled.div`
        height:51px;
        position:absolute;
        left:110px;

    `,
    ProfileName:styled.span`
        font-size:18px;
        font-weight:bold;
        color:black;
    `,
    ProfileDepart:styled.p`
        font-size:14px;
        margin-top:5px;
    `,
    WriteButton:styled.div`
        width:100%;
        height:48px;
        background-color:#4D91C6;
        border-radius:50px;
        margin-top:20px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:48px;
        
    `,
    WriteWrapper:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    `,
    WriteIcon:styled.img`

    `,
    WriteText:styled.span`
        font-size:16px;
        font-weight:600;
        color:white;
        margin-left:8px;
    `,
    MidWrapper:styled.div`
        width:calc(100% - 306px);
        border:1px solid black;
        height:100%;
        padding-top:100px;
    `,
    Totop:styled.img`
    position:fixed;
    right:283px;
    bottom:100px;
    `,
}