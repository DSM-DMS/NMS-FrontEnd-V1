import styled from "styled-components";

export const S = {
    TotalWrapperWrapper:styled.div`
    width:100%;
    height:100vh;
    
    `,
    TotalWrapper:styled.div`
        width:100%;
        min-height:100vh;
        max-height:fit-content;
        overflow-x:hidden;
        
    `,
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
        z-index:999;
        

    `,
    HeadWrapper:styled.div`
        width:1200px;
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
    display:flex;
    flex-direction:row;

    `,
    BodyWrapper:styled.div`
    width:100%;
    min-height:calc(100vh - 60px);
    max-height:fit-content;
    margin-top:60px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-x:hidden;
    padding-left:40px;
    

    `,
    Body:styled.div`
    min-width:1200px;
    max-width:fit-content;
    min-height:calc(100vh - 160px);
    max-height:fit-content;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    overflow-x:hidden;
    `,
    SideWrapper:styled.div`
    width:276px;
    height:100%;
    padding-top:98px;
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
        margin-left:24px;
    `,
    ProfileInfo:styled.div`
        height:51px;
        margin-left:16px;

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
        border:0.5px solid #4D91C6;
        border-radius:50px;
        margin-top:20px;
        display:flex;
        align-items:center;
        justify-content:center;

        margin-bottom:48px;
        transition:0.3s;

        :hover{
            background-color:white;
            transition:0.3s;
            >img{
                filter: invert(49%) sepia(91%) saturate(278%) hue-rotate(164deg) brightness(91%) contrast(96%);
                transition:0.3s;
                
                
            }
            >span{
                color:#4D91C6;
                transition:0.3s;
            }

        }
        
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
    MidWrapperWrapper:styled.div`
    display:flex;
    flex-direction:row;
    height:fit-content;
    width:928px;
    margin-left:40px;
    `,
    MidWrapper:styled.div`
        width:888px;
        height:100%;
        padding-top:98px;
        display:flex;
        flex-direction:column-reverse;
    `,
    Totop:styled.img`
        width:40px;
        height:54px;
        bottom:200px;
        margin-left:928px;
        position:fixed
    `,
    TopicText:styled.p`
        font-size:24px;
        font-weight:bold;
        font-family:Noto Sans CJK KR;
        margin-bottom:21px;

    `,
}