import styled from "styled-components";

export const S = {
    TotalWrapper:styled.div`
    width:888px;
    height:fit-content;
    border:1px solid black;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:48px;
    `,
    Wrapper:styled.div`
        width:808px;
        height:fit-content;

    `,
    HeadWrapper:styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-top:35px;
        padding-bottom:15px;
        border-bottom:1px solid #707070;

    `,
    HeadTextWrapper:styled.div`
        display:flex;
        flex-direction:row;
        font-family:Noto Sans CJK KR;
        align-items:flex-end;
        
    `,
    HeadName:styled.p`
        font-size:22px;
        font-weight:bold;
        margin-right:12px;

    `,
    HeadEmail:styled.p`
        font-size:13px;
        color:#707070;
    `,
    HeadButton:styled.div`
        width:28px;
        height:28px;
        border:1px solid #4D91C6;
        border-radius:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:0.3s;
        >img{
            filter: invert(49%) sepia(91%) saturate(278%) hue-rotate(164deg) brightness(91%) contrast(96%);
            transition:0.3s;
            
        }
        :hover{
                background-color:#4D91C6;
            >img{
                filter:none;
                transition:0.3s;
            }
        }
    `,
    BodyWrapper:styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        >img{
            width:134px;
            height:134px;
            border-radius:100%;
            margin-top:50px;

        }
    `,
    BodyTextWrapper:styled.div`
        margin-top:55px;
        margin-left:30px;
        margin-bottom:50px;
    `,
    EachTextWrapper:styled.div`
    font-family:Noto Sans CJK KR;

    display:flex;
    flex-direction:row;
    align-items:flex-start;
    margin-bottom:16px;

    `,
    TextTitle:styled.p`
        font-size:13px;
        font-weight:400;
        width:52px;
        margin-right:55px;
    `,
    TextInfo:styled.p`
        color:${props=>props.none?'black':'#B7B7B7'};
        font-size:14px;
        width:500px;
        word-break:break-all;
    `,

}