import React, { useRef, useState } from "react";
import { S } from "./style";
import LOGINIMG from "../../assets/images/Login/loginimg.svg";
import LOGINTOP from "../../assets/images/Login/logintop.svg";
import LOGINBOTTOM from "../../assets/images/Login/loginbottom.svg";
import EYE from "../../assets/images/Login/eye.svg";
import CLOSEDEYE from "../../assets/images/Login/closedeye.svg";
import axios from "axios";
import { getBaseurl } from "../../functions/getBaseurl";
import { onLogin } from "../../functions/onLogin";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [passwordToggle, setPasswordToggle] = useState(false);
  const idRef = useRef();
  const passRef = useRef();

  const onConfirm = () => {
    if (onLogin(idRef.current.value, passRef.current.value)) {
        navigate('/main/all');
    }
  };

  return (
    <S.TotalWrapper>
      <S.LoginTop src={LOGINTOP} />
      <S.LoginBottom src={LOGINBOTTOM} />
      <S.LeftWrapper>
        <img src={LOGINIMG} alt="" />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Title>LOGIN</S.Title>
        <S.InputWrapper>
          <S.TextFocus>
            <S.InputText>ID</S.InputText>
          </S.TextFocus>
          <input type="text" placeholder="ID or E-mail" ref={idRef} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.TextFocus>
            <S.InputText style={{ width: "95px" }}>PASSWORD</S.InputText>
          </S.TextFocus>
          <input
            type={passwordToggle ? "text" : "password"}
            placeholder="PASSWORD"
            ref={passRef}
          />
          <img
            src={passwordToggle ? EYE : CLOSEDEYE}
            alt=""
            onClick={() => {
              setPasswordToggle(!passwordToggle);
            }}
          />
        </S.InputWrapper>
        <S.LoginButton
          onClick={() => {
            onConfirm();
          }}
        >
          LOGIN
        </S.LoginButton>
        <S.FootText>회원가입하기</S.FootText>
      </S.RightWrapper>
    </S.TotalWrapper>
  );
}

export default Login;
