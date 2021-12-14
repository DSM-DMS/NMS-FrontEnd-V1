import styled from "styled-components";

export const S = {
    TotalWrapper:styled.div`
        width:100%;
        height:100vh;
        overflow:hidden;
        box-sizing:border-box;
        display:flex;
        flex-direction:row;
        
    `,
    LeftWrapper:styled.div`
    height:100%;
    width:50%;
    background-color:#4D91C6;
    >img{
        
        width:400px;
    }
    display:flex;
    align-items:center;
    justify-content:center;

    `,
    RightWrapper:styled.div`
        height:100%;
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

    `,
    LoginTop:styled.img`
        position:absolute;
        top:0px;
        left:0px;
        width:200px;
    `,
    LoginBottom:styled.img`
        position:absolute;

        bottom:0px;
        right:0px;
        width:200px;
        font-family:Tw Cen MT;
    `,
    Title:styled.p`
        font-size:60px;
        font-weight:400;
        font-family:Tw Cen MT;
        color:#4D91C6;
        margin-bottom:80px;

    `,
    InputWrapper:styled.div`
        border:2px solid #707070;
        width:440px;
        height:60px;
        border-radius:50px;
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:40px;
        >input{
            height:100%;
            width:85%;
            background-color:rgb(0,0,0,0);
            font-size:24px;
            padding-left:20px;
            border:none;
            outline:none;
            font-family:Tw Cen MT;
            ::placeholder{
                transition:0.3s;

            }
        }
        >img{
            margin-right:18px;
        }
        :focus-within{
            >div p{
                opacity:1;
                transition:0.3s;
            }
            border-color:#4D91C6;
            transition:0.3s;
            >input{
                ::placeholder{
                    opacity:0;
                    transition:0.3s;
                }
            }
        }
    `,
    TextFocus:styled.div`
        position:absolute;
    `,
    InputText:styled.p`
        position:absolute;
        font-family:Tw Cen MT;
        font-size:18px;
        background-color:white;
        width:25px;
        text-align:center;
        bottom:20px;
        left:25px;
        color:#4D91C6;
        opacity:0;
        transition:0.3s;
    `,
    LoginButton:styled.button`
        border-radius:50px;
        background-color:#4D91C6;
        border:2px solid #4D91C6;
        color:white;
        transition:0.3s;
        width:440px;
        height:60px;
        font-family:Tw Cen MT;
        font-size:24px;
        font-weight:400;
        margin-bottom:44px;
        margin-bottom:20px;
        :hover{
            background-color:white;
            color:#4D91C6;
            transition:0.3s;
        }
    `,
    FootText:styled.p`
        font-family:Noto Sans CJK KR;
        font-size:13px;
        font-weight:400;
        color:#707070;
    `,
    
}