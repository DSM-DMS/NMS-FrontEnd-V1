import React, { useRef, useState } from "react";
import { S } from "./style";
import TOPIMG from "../../assets/images/signup/signuptop.svg";
import SIGNUPIMG from "../../assets/images/signup/signupimg.svg";
import BOTTOMIMG from "../../assets/images/signup/signupbottom.svg";
import ARROW from "../../assets/images/signup/arrow.svg";
import ONARROW from "../../assets/images/signup/onarrow.svg";
import OutsideAlerter from "../../functions/useOutsideAlerter";
import Identify from "./Identify";
import axios from "axios";

function Signup() {
  const inputref = useRef();

  const [onoff, setOnoff] = useState(false);
  const [depart, setDepart] = useState("부서");
  const [modal, setModal] = useState(false);

  const onToggleOn = () => {
    inputref.current.style.visibility = "visible";
    if (onoff) {
      setOnoff(false);
      inputref.current.style.visibility = "hidden";
    } else setOnoff(true);
  };

  const onToggleOff = () => {
    inputref.current.style.visibility = "hidden";
    setOnoff(false);
  };

  const departments = [
    "교무부",
    "마이스터부",
    "교육연구부",
    "학생생활안전부",
    "사감부",
    "환경복지부",
    "교육정보부",
    "진로진학상담부",
    "산학협력부",
    "방과후학교부",
  ];
  const departlen = departments.length;

  const Check = () => {
    //이름
    if (!refName.current.value || refName.current.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    //아이디
    if (!refUsername.current.value || refUsername.current.value === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    //이메일
    if (!refEmail.current.value || refEmail.current.value === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    //부서
    if (depart === "부서") {
      alert("부서를 선택해주세요.");
      return;
    }

    //비번
    if (!refPassword.current.value || refPassword.current.value === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    function checkPassword() {
      var pw = refPassword.current.value;
      var num = pw.search(/[0-9]/g);
      var eng = pw.search(/[a-z]/gi);
      var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

      if (pw.length < 8 || pw.length > 20) {
        alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
        return false;
      } else if (pw.search(/\s/) !== -1) {
        alert("비밀번호는 공백 없이 입력해주세요.");
        return false;
      } else if (num < 0 || eng < 0 || spe < 0) {
        alert("비밀번호는 영문,숫자, 특수문자를 혼합하여 입력해주세요.");
        return false;
      } else {
        console.log("통과");
        return true;
      }
    }
    if(!checkPassword()){
        return;
    }

    //비확
    if (!refPasscheck.current.value || refPasscheck.current.value === "") {
        alert("비밀번호 확인란을 입력해주세요.");
        return;
    }
    if(refPassword.current.value !== refPasscheck.current.value){
        alert('비밀번호가 일치하지 않습니다.');
        return;

    }
    alert('이메일로 인증번호를 전송했습니다.');
    setModal(true);
  };

  const [verified, setVerify] = useState("");

  const verify = () => {};
  const refName = useRef();
  const refUsername = useRef();
  const refPassword = useRef();
  const refPasscheck = useRef();
  const refEmail = useRef();
  // const refDepart = useRef();
  // depart useState있음

  return (
    <>
      <Identify setModal={setModal} modal={modal} />
      <S.TotalWrapper>
        <S.TopImg src={TOPIMG} />
        <S.SignUpImg src={SIGNUPIMG} />
        <S.BottomImg src={BOTTOMIMG} />
        <S.InputsWrapper>
          <S.Title>SIGN UP</S.Title>
          <S.InputBody>
            <S.RowAlign>
              <S.InputWrapper>
                <input type="text" placeholder="이름" ref={refName} />
              </S.InputWrapper>

              <S.InputWrapper
                style={onoff ? { borderColor: "#4D91C6" } : {}}
                onClick={
                  onoff
                    ? () => {
                        onToggleOff();
                      }
                    : () => {
                        onToggleOn();
                      }
                }
              >
                <p style={onoff ? { color: "black" } : {}}>{depart}</p>
                <S.Arrow src={!onoff ? ARROW : ONARROW} />
              </S.InputWrapper>
              <S.ListWrapper ref={inputref}>
                {departments.map((value, index) => (
                  <S.Lists
                  key={index}
                    onClick={() => {
                      setDepart(value);
                      onToggleOff();
                    }}
                    style={index === departlen - 1 ? { border: "none" } : {}}
                  >
                    <p>{value}</p>
                  </S.Lists>
                ))}
              </S.ListWrapper>
            </S.RowAlign>
            <S.RowAlign>
              <S.InputWrapper>
                <input type="text" placeholder="아이디" ref={refUsername} />
              </S.InputWrapper>
              <S.InputWrapper>
                <input type="password" placeholder="비밀번호" ref={refPassword} />
              </S.InputWrapper>
            </S.RowAlign>
            <S.RowAlign>
              <S.InputWrapper>
                <input type="text" placeholder="이메일" ref={refEmail} />
              </S.InputWrapper>
              <S.InputWrapper>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  ref={refPasscheck}
                />
              </S.InputWrapper>
            </S.RowAlign>
          </S.InputBody>
          <S.SignUpButton onClick={()=>Check()}>SIGN UP</S.SignUpButton>
        </S.InputsWrapper>
      </S.TotalWrapper>
    </>
  );
}

export default Signup;
