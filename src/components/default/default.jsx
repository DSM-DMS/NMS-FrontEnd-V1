import React, { useEffect, useRef, useState } from "react";
import { S } from "./style";
import LOGO from "../../assets/images/main/logo.svg";
import PROPFILE from "../../assets/images/main/propfile.png";
import PEN from "../../assets/images/main/pen.svg";
import Cartegory from "./cartegory/cartegory";
import TOTOP from "../../assets/images/main/totop.svg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import { usePath } from "../../functions/usePath";
import BlockList from "./list";
import axios from "axios";
import { getBaseurl } from "../../functions/getBaseurl";
import { checkLogin } from "../../functions/checkLogin";
import WriteNotice from "../Write";
import Mypage from "../Mypage";

function Default() {
  const path = usePath();
  useEffect(() => {
    const refresh = async () => {
      const header = {
        "X-Refresh-Token": window.localStorage.getItem("refresh_Token"),
      };
      console.log(header);
      await axios
        .put(getBaseurl() + "/teacher/auth", {}, { headers: header })
        .then(async (res) => {
          console.log("refresh");
          console.log(res);
          const access = res.data.access_token;
          const refresh = res.data.refresh_token;
          window.localStorage.setItem("access_Token", access);
          window.localStorage.setItem("refresh_Token", refresh);
        });
    };
    const time = () => {
      setTimeout(()=>{
        refresh();
        time();
      },10000)
    }
/*     time();
 */  }, []);

  const WrapperRef = useRef();

  const [apidata, setApidata] = useState();
  const [apidataSchool, setApidatasSchool] = useState();
  const [apidataOutSchool, setApidataOutSchool] = useState();
  const [apidataFirst, setApidataFirst] = useState();
  const [apidataSecond, setApidataSecond] = useState();
  const [apidataThird, setApidataThird] = useState();
  const [profile, setProfile] = useState({
    img:undefined
  });
  const [mydata, setMydata] = useState();
  const navigate = useNavigate();

  const homeRef = useRef();
  const onHomeClick = () => {
  homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    

    const getData = async () => {
      const header = {
        Authorization: "Bearer " + window.localStorage.getItem("access_Token"),
      };
      console.log(
        'header'
      )
      
      const newarr = [];
      axios.get(getBaseurl() + "/notice/all", { headers: header }).then((res) => {
        console.log("all",res.data.notices);
        setApidata(res.data.notices);
      })
      .catch(err=>{
        console.log(err.response.status);
        if(err.response.status === 401){
          alert('로그인이 필요합니다.');
              window.location.href="/login";
        }
      })
      ;
      axios
        .get(getBaseurl() + "/notice?target=SCHOOL", { headers: header })
        .then((res) => {
          console.log("SCHOOL",res.data.notices);
          setApidatasSchool(res.data.notices);
        });
      axios
        .get(getBaseurl() + "/notice?target=SUBURBS", { headers: header })
        .then((res) => {
          console.log("OUT",res.data.notices);
          setApidataOutSchool(res.data.notices);
        });
      axios
        .get(getBaseurl() + "/notice?target=GRADE_FIRST", {
          headers: header,
        })
        .then((res) => {
          console.log("FIRST",res.data.notices);
          setApidataFirst(res.data.notices);
        });
      axios
        .get(getBaseurl() + "/notice?target=GRADE_SECOND", { headers: header })
        .then((res) => {
          console.log("SECOND",res.data.notices);
          setApidataSecond(res.data.notices);
        });
      axios
        .get(getBaseurl() + "/notice?target=GRADE_THIRD", { headers: header })
        .then((res) => {
          console.log("THIRD",res.data.notices);
          setApidataThird(res.data.notices);
        });
        
        axios.get(getBaseurl()+'/teacher/mypage',{headers:header})
        .then(res=>{
          console.log('mypage:',res.data);
          setProfile({
            name:res.data.name,
            department:res.data.department,
            img:res.data.profile_url,
            email:res.data.email,
            username:res.data.username,
            phone_number:res.data.phone_number,
            introduce:res.data.introduce,

          })
          setMydata(res.data.my_notices)
        })
    }
  
  useEffect(function(){
    setTimeout(()=>getData(),500)
    
  }, []);

  return (
    <S.TotalWrapperWrapper
      id="scrollfocus"
      onClick={() => {
        console.log(apidata);
      }}
    >
      <S.TotalWrapper  ref={homeRef}>
        <S.Header>
          <S.HeadWrapper>
            <S.Logo src={LOGO} />
            <S.LoginText><p onClick={()=>navigate('/login')}>로그인</p>/<p onClick={()=>navigate('/signup')}>회원가입</p></S.LoginText>
          </S.HeadWrapper>
        </S.Header>
        <S.BodyWrapper>
          <S.Body>
            <S.SideWrapper>
              <S.ProfileBox onClick={()=>navigate('/main/mypage')}>
                <S.ProfileImg src={profile.img?profile.img:PROPFILE} />
                <S.ProfileInfo>
                  <S.ProfileName>{profile.name}</S.ProfileName>
                  <S.ProfileDepart>{profile.department}</S.ProfileDepart>
                </S.ProfileInfo>
              </S.ProfileBox>
              <S.WriteButton onClick={()=>{navigate('/main/write')}}>
                <S.WriteIcon src={PEN} />
                <S.WriteText>게시물 작성</S.WriteText>
              </S.WriteButton>
              <Cartegory />
            </S.SideWrapper>
            <S.MidWrapperWrapper>
              <S.MidWrapper>
                <Routes>
                  <Route path="/profile/edit" element={<ProfileEdit profile={profile} />} />
                  <Route
                    path="/all"
                    element={
                      <>
                        <BlockList array={apidata?apidata:''} profile={profile} />
                        <S.TopicText>
                          전체 공지
                        </S.TopicText>

                      </>
                    }
                  />
                  <Route
                    path="/inschool"
                    element={
                      <>
                        <BlockList array={apidataSchool?apidataSchool:''} profile={profile}/>
                        <S.TopicText>
                          교내 공지
                        </S.TopicText>
                      </>
                    }
                  />
                  <Route
                    path="/outschool"
                    element={
                      <>
                        <BlockList array={apidataOutSchool?apidataOutSchool:''} profile={profile}/>
                        <S.TopicText>
                          교외 공지
                        </S.TopicText>
                      </>
                    }
                  />
                  <Route
                    path="/grade/1"
                    element={
                      <>
                        <BlockList array={apidataFirst?apidataFirst:''} profile={profile}/>
                        <S.TopicText>
                          1학년 공지
                        </S.TopicText>
                      </>
                    }
                  />
                  <Route
                    path="/grade/2"
                    element={
                      <>
                        <BlockList array={apidataSecond?apidataSecond:''} profile={profile}/>
                        <S.TopicText>
                          2학년 공지
                        </S.TopicText>
                      </>
                    }
                  />
                  <Route
                    path="/grade/3"
                    element={
                      <>
                        <BlockList array={apidataThird?apidataThird:''} profile={profile}/>
                        <S.TopicText>
                          3학년 공지
                        </S.TopicText>
                      </>
                    }
                  />
                  <Route
                    path="/mypage"
                    element={
                      <>
                        <BlockList array={mydata?mydata:''} profile={profile} ismypage={true}/>
                        <Mypage profile={profile} />
                      </>
                    }
                  />
                  <Route
                    path='/write'
                    element={
                      <>
                        <WriteNotice profile={profile} />
                      </>
                    }
                  />
                </Routes>
              </S.MidWrapper>
              {path !== "/main/profile/edit" ? (
                <S.Totop
                onClick={()=>onHomeClick()}
                  id="totop"
                  src={TOTOP}
                  style={{ marginTop: window.scrollY }}
                />
              ) : (
                <div></div>
              )}
            </S.MidWrapperWrapper>
          </S.Body>
        </S.BodyWrapper>
      </S.TotalWrapper>
    </S.TotalWrapperWrapper>
  );
}

export default Default;
