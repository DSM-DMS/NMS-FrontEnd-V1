import React from "react";
import { S } from "./style";
import LOGO from "../../assets/images/main/logo.svg";
import PROPFILE from "../../assets/images/main/propfile.png";
import PEN from '../../assets/images/main/pen.svg'
import Cartegory from "./cartegory/cartegory";
import TOTOP from '../../assets/images/main/totop.svg'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Mypage from "../Mypage/Mypage";

function Default() {

  return (
    <>
      <S.Header>
        <S.HeadWrapper>
          <S.Logo src={LOGO} />
          <S.LoginText>로그인/회원가입</S.LoginText>
        </S.HeadWrapper>
      </S.Header>
      <S.BodyWrapper>
        <S.Body>
          <S.SideWrapper>
            <S.ProfileBox>
                <S.ProfileImg src={PROPFILE} />
              <S.ProfileInfo>
                <S.ProfileName>이름</S.ProfileName>
                <S.ProfileDepart>부서</S.ProfileDepart>
              </S.ProfileInfo>
            </S.ProfileBox>
            <S.WriteButton>
                <S.WriteIcon src={PEN} />
                <S.WriteText>
                    게시물 작성
                </S.WriteText>
            </S.WriteButton>
            <Cartegory />
          </S.SideWrapper>
          <S.MidWrapper>
            <Routes>
                <Route path="/mypage" element={<Mypage />} />

            </Routes>
          </S.MidWrapper>
        </S.Body>
          <S.Totop src={TOTOP} />
      </S.BodyWrapper>
    </>
  );
}

export default Default;
