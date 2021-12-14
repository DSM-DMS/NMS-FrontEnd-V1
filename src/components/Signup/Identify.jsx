import React, { useEffect, useRef, useState } from "react";
import { S } from "./style";
import X from "../../assets/images/signup/x.svg";
import { onSignup } from "../../functions/onSignup";
import { verfyEmail } from "../../functions/verify";

function Identify({setModal , modal, ref, info}) {

    const refinput = useRef();
    const [num , setNum] = useState([]);

    function time(){
        setTimeout(()=>{
            if(modal){
              time();
            }
        },100)

    }
    useEffect(()=>{
        time();
        refinput.current.value = '1';
    },[])

    const onChange = () => {
        
        if(refinput.current.value.length <1){
            setNum(num.slice(0,num.length-1))
            refinput.current.value = '1';
        }
        else if (refinput.current.value.length>1){
            const temp =refinput.current.value.substr(1,2)
            var number = temp.search(/[0-9]/g);
            if(/* !number && */ num.length<6){
                setNum([...num,temp]);
            }
            refinput.current.value = '1';

        }
        
    }

    const coderef = useRef(0);
    const onClick = () => {
      //refName,refUsername,refPassword,depart,refEmail
        console.log(num.join(''));
        const code = num.join('');
        const name = info.refName;
        const username = info.refUsername;
        const password = info.refPassword;
        const depart = info.depart;
        const email = info.refEmail;
        if(verfyEmail(code,coderef)){
          console.log('인증 성공');
          onSignup(name.current.value,username.current.value,password.current.value,depart,email.current.value);
        }
    }
    

  return (
    <S.ModalWrapper style={modal?{display:'flex'}:{display:'none'}} onClick={()=>{
      refinput.current.focus();
    }}>
      <S.ModalBox>
        <S.X src={X} onClick={()=>setModal(false)} />
        <S.InvisibleInput ref={refinput} onChange={()=>onChange()} />
        <S.Box>
          <S.ModalHeader>
            <S.ModalTitle>인증번호 입력</S.ModalTitle>
            <S.ModalSubtitle>
              입력하신 이메일로 보내드린 인증번호를 입력하세요.
            </S.ModalSubtitle>
          </S.ModalHeader>
          <S.ModalInputWrapper>
            <S.ModalInputBox><p>{num[0]?num[0]:''}</p></S.ModalInputBox>
            <S.ModalInputBox><p>{num[1]?num[1]:''}</p></S.ModalInputBox>
            <S.ModalInputBox><p>{num[2]?num[2]:''}</p></S.ModalInputBox>
            <S.ModalInputBox><p>{num[3]?num[3]:''}</p></S.ModalInputBox>
            <S.ModalInputBox><p>{num[4]?num[4]:''}</p></S.ModalInputBox>
            <S.ModalInputBox><p>{num[5]?num[5]:''}</p></S.ModalInputBox>
          </S.ModalInputWrapper>
          <S.ModalFooter>
            <S.ModalButton onClick={()=>{onClick()}}>인증하기</S.ModalButton>
            <div>
              <p>인증번호를 받지 못하셨나요?</p>
              <span>새 인증번호 받기</span>
            </div>
          </S.ModalFooter>
        </S.Box>
      </S.ModalBox>
    </S.ModalWrapper>
  );
}

export default Identify;
