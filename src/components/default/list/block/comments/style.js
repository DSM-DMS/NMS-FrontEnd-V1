import styled from "styled-components";

export const S = {
    TotalWrapper:styled.div`
        height:fit-content;
        width:848px;
        border-top:0.5px solid #707070;
        font-family:Noto Sans CJK KR;
        
        `,
    TitleText:styled.p`
        margin-top:16px;
        margin-bottom:18px;
        font-size:16px;
        font-weight:bold;
    `,



    MainCommentWrapper:styled.div`
        height:fit-content;
        display:flex;
        flex-direction:row;
        margin-left:0.5px;
        #MainCommentWrapper{
            display:flex;
            flex-direction:column;
        }
    `,

    MainProfileWrapper:styled.div`
    width:40px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
    `,
    MainProfileImg:styled.img`
        width:40px;
        height:40px;
        border-radius:100%;
    `,
    MainColBorder:styled.div`
        height:calc(100% - 40px);
        border-right:1px solid #707070;
    `,
    MainTextWrapper:styled.div`
        background-color:white;
        margin-left:10px;
        border-radius:20px;
        min-width:fit-content;
        max-width:calc(100% - 50px);
        padding:12px;
    `,
    



    SubCommentWrapper:styled.div`
    
    height:fit-content;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    `,
    SubRowBorder:styled.div`
    width:40px;
    height:15px;
    border-bottom:1px solid #707070;
    border-left:1px solid #707070;
    `,
    SubColBorder:styled.div`
    height:calc(100% - 30px);
    border-right:1px solid #707070;
`,
    SubProfileWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        height:30px;
        margin-left:0.5px

    `,
    SubProfileWrapperWrapper:styled.div`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        height:auto;
        
    `,

    SubProfileImg:styled.img`
    width:30px;
    height:30px;
    border-radius:100%;
    `,


    ProfileName:styled.p`
        font-size:13px;
        font-weight:bold;
    `,
    Info:styled.p`
        font-size:15px;
        font-weight:400;
        width:100%;
        word-break:unset;
       
        
    `,
    CommentFootWrapper:styled.div`
        display:flex;
        flex-direction:row;
        font-size:12px;
        color:#707070;
        margin-left:22px;
        margin-bottom:9px;
        margin-top:4px;
    `,

    ReplyWrapper:styled.div`
        width:750px;
        height:40px;
        background-color:white;
        display:flex;
        
        align-self:center;
        border-radius:50px;
        margin-left:14px;
        justify-content:space-between;
        align-items:center;
    `,
    ReplyInput:styled.input`
        height:100%;
        font-size:16px;
        padding-left:16px;
        background-color:rgb(0,0,0,0);
        border:none;
        width:88%;
        outline:none;
        ::placeholder{
            color:#707070;
            font-size:15px;
            font-weight:400;
            opacity:1;
            transition:0.3s;
        }
        :focus::placeholder{
            opacity:0;
            transition:0.3s;
        }
    `,
    WriteButton:styled.button`
    width:56px;
    height:30px;
    font-size:14px;
    font-weight:bold;
    border-radius:20px;
    margin-right:6px;
    background-color:#4D91C6;
    color:white;
    border:1px solid #4D91C6;
    transition:0.3s;
    :hover{
        color:#4D91C6;
        background-color:white;
        transition:0.3s;
    }
    `,
    WriteCommentWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        margin-top:18px;
        margin-bottom:36px;
    `,
    Profile:styled.img`
    width:40px;
    height:40px;
    margin-left:11px;
    border-radius:100%;
    `,

    
}