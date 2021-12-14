import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    border: 1px solid #b7b7b7;
    box-sizing: border-box;
    width: 888px;
    height: 822px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:100px;
  `,

  Wrapper: styled.div`
    width: 744px;
    height: fit-content;
    border-bottom: 1px solid #b7b7b7;
    
  `,

  Header: styled.div`
    height: 41px;
    width: 100%;
    border-bottom: 1px solid #b7b7b7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 220px;
    margin-bottom: 10px;
  `,
  Title: styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: bold;
  `,
  TitleDetail: styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 13px;

    span {
      color: #4d91c6;
    }
  `,
  ChangePass: styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 13px;
    color: #4d91c6;
    text-decoration: underline;
  `,
  ProfileWrapper: styled.div`
    margin-top: 44px;
  `,
  ProfileText: styled.p`
    font-size: 14px;
    font-weight: 500;
    font-family: Noto Sans CJK KR;
    margin-bottom: 12px;
  `,
  ProfileBox: styled.div`
    width: 120px;
    height: 120px;
    border: 1px solid black;
    box-sizing: border-box;
  `,
  InputsWRapper: styled.div`
    
    width: 100%;
    box-sizing: border-box;
    margin-top: 44px;
    padding-bottom: 30px;
  `,
  RowAlign: styled.div`
    padding-right: 30px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 54px;
  `,

  InputWrapperWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${(props) => props.width}px;
  `,
  InputTitle: styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 14px;
    font-weight: 500;
    span {
      color: #4d91c6;
    }
  `,
  InputWrapper: styled.div`
    height: 40px;
    width: 100%;
    border: 1.6px solid #b7b7b7;
    border-radius: 10px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transition:0.3s;
    :focus-within {
      border-color: #4d91c6;
      transition: 0.3s;
    }
    >p{
      margin-left:15px;
      font-family:Noto Sans CJK KR;
      font-size:14px;
    }
  `,
  Input: styled.input`
    height: 100%;
    width: 85%;
    margin-left: 15px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color:rgb(0,0,0,0);
    font-family:Noto Sans CJK KR;
    color:#707070;
    transition:0.3s;
    :focus{
      color:black;
      transition:0.3s;
    }
    ::placeholder{
      transition:0.3s;
      color:#B7B7B7;
    }
    :focus::placeholder {
      opacity: ${(props) => (props.displaceholder ? 1 : 0)};
      transition: 0.3s;

    }
  `,
  ButtonWrapper: styled.div`
    width: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  `,

  EachButton: styled.button`
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    border-radius: 50px;
    border: 1.5px solid #4d91c6;
    color: ${(props) => (props.reverse ? "#4D91C6" : "white")};
    background-color: ${(props) => (!props.reverse ? "#4D91C6" : "white")};
    transition: 0.3s;
    font-weight: 600;
    font-size: 18px;
    font-family: Noto Sans KR;
    :hover {
      color: ${(props) => (!props.reverse ? "#4D91C6" : "white")};
      background-color: ${(props) => (props.reverse ? "#4D91C6" : "white")};
      transition: 0.3s;
    }
  `,
  InputImgWrapper: styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  `,
  ToggleWrapper: styled.div`
    position: absolute;
    border: 1px solid #707070;
    width: 336px;
    height: 219px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background-color: white;
    top:40px;

    ::-webkit-scrollbar {
      display: none;
    }
  `,
  ToggleContentWrapper: styled.div`
    border-bottom: 1px solid #707070;
    width: 308px;
    height: 43px;
    > p {
      padding: 12px 0 12px 0;
      font-family: Noto Sans CJK KR;
      font-size: 14px;
      color:#707070;
    }
  `,
  Modalfocus:styled.div`
    position:absolute;
  `,
};
