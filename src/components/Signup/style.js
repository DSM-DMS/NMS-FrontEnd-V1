import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    overflow-x: hidden;
    overflow-y:hidden;
  `,
  TopImg: styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    width: 200px;
  `,
  SignUpImg: styled.img`
    position: absolute;
    bottom: 0px;
    left: 0px;
    pointer-events: none;
    width:645px;
  `,
  BottomImg: styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;
    pointer-events: none;
    width: 300px;
  `,

  InputsWrapper: styled.div`
    zoom: 75%;
    height: 700px;
    width: 690px;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 42%;
  `,

  Title: styled.span`
    font-family: "Tw Cen MT", sans-serif;
    color: #4d91c6;
    font-size: 64px;
  `,

  RowAlign: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  InputBody: styled.div`
    height: 350px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  InputWrapper: styled.div`
    border-bottom: 3.5px solid #b7b7b7; // props화
    height: 50px;
    width: 306px;
    transition: 0.3s;
    display: flex;
    flex-direction: row;
    input {
      color: #b7b7b7;
      border: none;
      outline: none;
      margin: 0px;
      padding: 0px;
      margin-left: 24px;
      font-family: Noto Sans CJK KR;
      font-size: 20px;
      height: 85%;
      width: 82%;
      transition: 0.3s;
      background-color: rgb(0, 0, 0, 0);
      :focus {
        color: black;
        transition: 0.3s;
      }
      ::placeholder {
        color: #b7b7b7;
        transition: 0.3s;
      }
      :focus::placeholder {
        color: white;
        transition: 0s;
      }
    }
    p {
      border: none;
      outline: none;
      margin: 0px;
      padding: 0px;
      margin-left: 24px;
      font-family: Noto Sans CJK KR;
      font-size: 20px;
      width: 82%;
      color: #b7b7b7;
      margin-top: 8px;
      cursor: pointer;
      transition: 0.3s;
    }
    :focus-within {
      border-color: #4d91c6;
      color: black;
      transition: 0.3s;
    }
  `,

  InputText: styled.p`
    padding-left: 25px;
  `,

  SignUpButton: styled.button`
    width: 306px;
    height: 49px;
    font-family: "Tw Cen MT", sans-serif;
    background-color: #4d91c6;
    font-size: 24px;
    color: white;
    transition: 0.3s;
    border: none;
    border: 3px solid #4d91c6;
    box-sizing: border-box;
    border-radius: 50px;
    align-self: flex-end;
    cursor: pointer;
    :hover {
      background-color: white;
      color: #4d91c6;
      transition: 0.3s;
    }
  `,

  Arrow: styled.img`
    height: 10px;
    margin-top: 15px;
    margin-left: 11px;
    padding: 5px;
    transition: 0.3s;
    pointer-events: none;
    cursor: pointer;
  `,
  ListWrapper: styled.div`
    visibility: hidden;
    width: 306px;
    height: 255px;
    border: 1px solid #707070;
    position: absolute;
    top: 260px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  Lists: styled.div`
    width: 260px;
    height: 500px;
    border-bottom: 1px solid #707070;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #707070;
    p {
      margin-top: 13px;
      margin-bottom: 13px;
      font-size: 18px;
      cursor: pointer;
    }
  `,
  ModalWrapper: styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
  `,
  ModalBox: styled.div`
    width: 582px;
    height: 486px;
    background-color: white;
    position: absolute;
    border-radius: 20px;
    font-family: Noto Sans CJK KR;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 343px;
    height: 308px;
  `,

  X: styled.img`
    position: absolute;
    top: 35px;
    right: 37px;
  `,
  ModalHeader: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ModalTitle: styled.span`
    font-weight: bold;
    font-size: 28px;
  `,
  ModalSubtitle: styled.span`
    font-size: 16px;
  `,
  ModalInputWrapper: styled.div`
    width: 340px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  ModalInputBox: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #707070;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  ModalFooter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      padding-top: 8px;
      p {
      }
      span {
        margin-left: 3px;
        color: #4d91c6;
        text-decoration: underline;
      }
    }
  `,
  ModalButton: styled.button`
    width: 343px;
    height: 40px;
    background-color: #4d91c6;
    font-size: 16px;
    color: white;
    border-radius: 50px;
    border: none;
    outline: none;
    font-weight: 500;
  `,
  InvisibleInput: styled.input`
    position: absolute;
    bottom: 0px;
    opacity: 0;
    cursor: default;
  `,
};
