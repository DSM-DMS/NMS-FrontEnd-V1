import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    border: 1px solid black;
    width: 888px;
    border-radius: 10px;
    background-color: #dbdbdb;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Noto Sans CJK KR;
    margin-bottom: 50px;
  `,
  Wrapper: styled.div`
    width: 848px;
    height: 100%;
  `,
  ProfileImg: styled.img`
    width: 60px;
    height: 60px;
    margin-right: 16px;
    border-radius: 100%;
  `,
  HeadWrapper: styled.div`
    border-bottom: 0.5px solid #707070;
    height: 95px;
    width: 100%;
    display: flex;
    align-items: center;
  `,
  ProfileWrapper: styled.div`
    margin-left: 32px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  TypeWrapper: styled.div`
    border-bottom: 0.5px solid #707070;
    width: 100%;
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  EachRadioInputWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    margin-right: 20px;
    > p {
      width: 34px;
    }
  `,
  EachRadioInput: styled.input`
    width: 16px;
    height: 16px;
    color: #707070;
    background: #707070;
    margin-right: 8px;
  `,
  CancelCheck: styled.p`
    font-size: 14px;
    color: #707070;
    margin-left: 520px;
    cursor:pointer;
  `,

  ImgsWrapper: styled.div`
    height: 238px;
    weight: 100%;
    border-bottom: 0.5px solid #707070;
    display: flex;
    flex-direction: column;
  `,
  ImgsCountWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 30px;
    margin-bottom: 9px;
  `,
  ImgsCountName: styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-right: 4px;
  `,
  ImgsCount: styled.p`
    font-size: 12px;
    color: #707070;
  `,

  PreviewImgs: styled.div`
    width: 154px;
    height: 154px;
    background-image: ${(props) => "url(" + props.img + ")"};
    background-size: cover;
    margin-right: 28px;
    > img {
      margin-left: 130px;
      margin-top: 8px;
    }
  `,

  PreviewWarpper: styled.div`
    display: flex;
    flex-direction: row;
  `,

  TitleWrapper: styled.div`
    height: 50px;
    width: 100%;
    border-bottom: 0.5px solid #707070;
    > p {
      font-size: 14px;
      font-weight: 500;
      margin-left: 12px;
      margin-right: 16px;
    }
    > input {
      width: 90%;
      font-size: 13px;
      background-color: rgb(0, 0, 0, 0);
      border: none;
      outline: none;
      color: #707070;
      font-weight: 400;
      font-family: Noto Sans CJK KR;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  InfoWrapper: styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    > p {
      font-size: 14px;
      font-weight: 500;
      margin-left: 12px;
      margin-right: 16px;
      margin-top: 16px;
    }
    > textarea {
      margin-top: 18px;
      resize: none;
      width: 90%;
      background-color: rgb(0, 0, 0, 0);
      font-family: Noto Sans CJK KR;
      color: #707070;
      outline: none;
      border:none;
      font-weight: 400;
      overflow-y: hidden;
    }
  `,
  ButtonsWrapper: styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-end;
    margin-bottom:28px;
  `,
  CancelButton: styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    color: #4d91c6;
    background-color: white;
    transition: 0.3s;
    border: none;
    font-size: 16px;
    font-weight: bold;
    :hover {
      color: white;
      background-color: #4d91c6;
      transition: 0.3s;
    }
  `,
  ConfirmButton: styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    color: white;
    background-color: #4d91c6;
    transition: 0.3s;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin-left:16px;
    :hover {
      color: #4d91c6;
      background-color: white;
      transition: 0.3s;
    }
  `,
  //dropzone
  ZoneWrapper: styled.div`
    width: 154px;
    height: 154px;
    margin-right: 24px;
    background-image: ${(props) => "url(" + props.img + ")"};
  `,
};
