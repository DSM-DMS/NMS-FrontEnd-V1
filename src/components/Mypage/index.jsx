import React from "react";
import { S } from "./style";
import EDIT from '../../assets/images/main/mypage/pen.svg'
import DEFPROFILE from '../../assets/images/main/propfile.png'
import { useNavigate } from "react-router-dom";

function Mypage({profile}){

    const username = profile.username;
    const phone = profile.phone_number;
    const depart = profile.department;
    const intro = profile.introduce;
    console.log('profileinfo:',username,phone,depart,intro);

    const navigate = useNavigate();
    return(
        <S.TotalWrapper>
            <S.Wrapper>
                <S.HeadWrapper>
                    <S.HeadTextWrapper>
                        <S.HeadName>
                            {profile.name}
                        </S.HeadName>
                        <S.HeadEmail>
                            {profile.email}
                        </S.HeadEmail>
                    </S.HeadTextWrapper>
                        <S.HeadButton onClick={()=>navigate('/main/profile/edit')}>
                            <img src={EDIT} alt="" />

                        </S.HeadButton>
                </S.HeadWrapper>
                <S.BodyWrapper>
                    <img src={profile.img?profile.img:DEFPROFILE} alt="" />
                    <S.BodyTextWrapper>
                    <S.EachTextWrapper>
                            <S.TextTitle>
                                아이디
                            </S.TextTitle>
                            <S.TextInfo none={username}>
                                {profile.username}
                            </S.TextInfo>
                        </S.EachTextWrapper>
                        <S.EachTextWrapper>
                            <S.TextTitle>
                                전화번호
                            </S.TextTitle>
                            <S.TextInfo none={phone} >
                                {profile.phone_number?profile.phone_number:'정보없음'}
                            </S.TextInfo>
                        </S.EachTextWrapper>
                        <S.EachTextWrapper>
                            <S.TextTitle>
                                부서
                            </S.TextTitle>
                            <S.TextInfo none={depart}>
                                {profile.department}
                            </S.TextInfo>
                        </S.EachTextWrapper>
                        <S.EachTextWrapper>
                            <S.TextTitle>
                                자기소개
                            </S.TextTitle>
                            <S.TextInfo none={intro}>
                                {profile.introduce?profile.introduce:'정보없음'}
                            </S.TextInfo>
                        </S.EachTextWrapper>
                    </S.BodyTextWrapper>       
                </S.BodyWrapper>
            </S.Wrapper>
        </S.TotalWrapper>
    )
}

export default Mypage;