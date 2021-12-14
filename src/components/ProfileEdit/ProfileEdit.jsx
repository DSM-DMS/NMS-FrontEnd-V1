import React, { useCallback, useEffect, useRef, useState } from "react";
import { S } from "./style";
import LOCK from "../../assets/images/main/mypage/lock.svg";
import ARROWON from "../../assets/images/main/mypage/arrowon.svg";
import ARROWOFF from "../../assets/images/main/mypage/arrowoff.svg";
import Inputs from "./EachInput";
import axios from "axios";
import { getBaseurl } from "../../functions/getBaseurl";
import { useNavigate } from "react-router-dom";

function ProfileEdit({}) {
  const [onoff, setOnoff] = useState(false);
  const curDepart = useRef();
  const setDepart = (value) => {
    curDepart.current = value;
  };
  const [profile, setProfile] = useState();

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
  const infoRef = useRef();
  useEffect(() => {
    const header = {
      Authorization: "Bearer " + window.localStorage.getItem("access_Token"),
    };
    axios
      .get(getBaseurl() + "/teacher/mypage", { headers: header })
      .then((res) => {
        console.log("mypage:", res.data);
        setProfile({
          name: res.data.name,
          department: res.data.department,
          img: res.data.profile_url,
          email: res.data.email,
          username: res.data.username,
          phone_number: res.data.phone_number,
          introduce: res.data.introduce,
        });
        setDepart(res.data.department);
        infoRef.current = {
          department: res.data.department,
          email: res.data.email,
          phone_number: res.data.phone_number,
          introduce: res.data.introduce,
        };
      });
  }, []);

  const emailRef = useRef();
  const introRef = useRef();

  const onChange = useCallback(
    (title, e) => {
      switch (title) {
        case "아이디": {
          infoRef.current = { ...infoRef.current, id: e.target.value };
          break;
        }
        case "전화번호": {
          infoRef.current = { ...infoRef.current, phone_number: e.target.value };
          break;
        }
        case "부서": {
          infoRef.current = { ...infoRef.current, department: e.target.value };
          break;
        }
        case "이메일": {
          infoRef.current = { ...infoRef.current, email: e.target.value };
          break;
        }
        case "자기소개": {
          infoRef.current = { ...infoRef.current, introduce: e.target.value };
          break;
        }
        default: {
        }
      }
    },
    [profile]
  );
  const navigate = useNavigate();

  const onConfirm = () => {
    infoRef.current = {...infoRef.current,department:curDepart.current};
    console.log('result',infoRef.current);
    const header = {
      "Content-Type": "multipart/form-data",
      Authorization:'Bearer '+window.localStorage.getItem('access_Token')
  }
  const body = infoRef.current;
  const json = JSON.stringify(body);

  const formdata = new FormData();
  
  formdata.append("teacherInfoRequest", new Blob([JSON.stringify(body)], {
      type: "application/json"
  }));

  axios({ // 전송
      method: "put",
      url: getBaseurl()+'/teacher',
      data: formdata,
      headers: header
    })
    .then(res=>{
      alert('성공');
    })
  }

  return (
    <>
      <S.TotalWrapper>
        <S.Wrapper>
          <S.Header>
            <S.TitleWrapper>
              <S.Title>프로필 수정</S.Title>
              <S.TitleDetail>
                <span>*</span> 은 필수항목입니다
              </S.TitleDetail>
            </S.TitleWrapper>
            <S.ChangePass>비밀번호 변경</S.ChangePass>
          </S.Header>
          <S.ProfileWrapper>
            <S.ProfileText>프로필 사진</S.ProfileText>
            <S.ProfileBox></S.ProfileBox>
          </S.ProfileWrapper>
          <S.InputsWRapper>
            <S.RowAlign>
              <Inputs
                title={"아이디"}
                ness={1}
                readonly={true}
                placeholder={profile ? profile.username : undefined}
                img={LOCK}
                onChange={onChange}
              />
              <Inputs
                title={"전화번호"}
                placeholder="정보없음"
                value={profile ? profile.phone_number : ""}
                onChange={onChange}
              />
            </S.RowAlign>
            <S.RowAlign>
              <S.Modalfocus>
                {onoff ? (
                  <S.ToggleWrapper>
                    {departments.map((value, index) => (
                      <S.ToggleContentWrapper
                        style={
                          index === departments.length - 1
                            ? { borderBottom: "none" }
                            : {}
                        }
                        onClick={() => {
                          setDepart(value);
                          setOnoff(false);
                        }}
                      >
                        <p
                          style={
                            value === curDepart ? { color: "#4D91C6" } : {}
                          }
                        >
                          {value}
                        </p>
                      </S.ToggleContentWrapper>
                    ))}
                  </S.ToggleWrapper>
                ) : (
                  <></>
                )}
              </S.Modalfocus>
              <Inputs
                title={"부서"}
                ness={1}
                readonly={true}
                value={curDepart.current}
                img={onoff ? ARROWON : ARROWOFF}
                onClick={() => {
                  setOnoff(!onoff);
                }}
                toggle={onoff}
                onChange={onChange}
              />
              <Inputs
                title={"이메일"}
                ness={1}
                placeholder="정보없음"
                ref={emailRef}
                value={profile ? profile.email : " "}
                onChange={onChange}
              />
            </S.RowAlign>
            <S.RowAlign>
              <Inputs
                title={"자기소개"}
                width={714}
                fullwidth={true}
                placeholder="정보없음"
                ref={introRef}
                value={profile ? profile.introduce : ""}
                onChange={onChange}
              />
            </S.RowAlign>
          </S.InputsWRapper>
        </S.Wrapper>
        <S.ButtonWrapper>
          <S.EachButton reverse={true} onClick={()=>{navigate('/main/mypage')}}>취소</S.EachButton>
          <S.EachButton onClick={()=>onConfirm()}>변경</S.EachButton>
        </S.ButtonWrapper>
      </S.TotalWrapper>
    </>
  );
}

export default ProfileEdit;
