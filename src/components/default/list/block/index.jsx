import React, { useEffect, useState } from "react";
import { S } from "./style";
import THUMB from "../../../../assets/images/main/list/thumbs.svg";
import Comments from "./comments";
import MORE from "../../../../assets/images/main/list/More.svg";
import EDIT from "../../../../assets/images/main/list/edit.svg";
import DELETE from "../../../../assets/images/main/list/delete.svg";
import DEFPROFILE from '../../../../assets/images/main/propfile.png'
import { useCallback } from "react";
import { usePath } from "../../../../functions/usePath";

function EachTag({ type }) {
  if(!type) return(<></>);
  const typeArr = [];
  type.map((value, index) => {
    switch (value) {
      case "GRADE_FIRST": {
        typeArr.push("1학년");
        break;
      }
      case "GRADE_SECOND": {
        typeArr.push("2학년");
        break;
      }
      case "GRADE_THIRD": {
        typeArr.push("3학년");
        break;
      }
      case "SCHOOL": {
        typeArr.push("교내");
        break;
      }
      case "SUBURBS": {
        typeArr.push("교외");
        break;
      }
      default: {
        break;
      }
    }
  });
  return (
    <>
      {typeArr.map((value) => value !== 'default'?(
        <S.Tags>
          <p>{value}</p>
        </S.Tags>
      ):'')}
    </>
  );
}

function EachBlock({ info, images, ismypage ,profile,onEdit,setInfo, onDelete}) {
  const [,updatestate] = useState();
  const forceupdate = useCallback((ref) => {
    window.location.href = window.location.pathname;
    setTimeout(()=>{
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      console.log('asdf');
    },5000)
  },[])
  const title = info.title; //
  const postinfo = info.content; //
  const date = info.created_date; //
  const id = ismypage ? info.id : info.notice_id;
  const liked = info.star_count;
  const targets = ismypage?info.target_tags:info.targets;
  const writer = info.writer;
  const commentCount = ismypage ? null : info.comment_count;
  const comment = ismypage ? null : info.comments;

  const [srccount, setSrccount] = useState(images.length);
  useEffect(() => {
    console.log('profile',profile)

  }, []);

  function Src1() {
    return (
      <S.SinglePhotoWrapper>
        <img src={images[0]} alt="" />
      </S.SinglePhotoWrapper>
    );
  }
  function Src2() {
    return (
      <S.DoublePhotoWrapper>
        <div>
          <img src={images[0]} alt="" />
        </div>
        <div>
          <img src={images[1]} alt="" />
        </div>
      </S.DoublePhotoWrapper>
    );
  }
  function Src3() {
    return (
      <S.TripplePhotoWrapper>
        <div id="left">
          <img src={images[0]} alt="" />
        </div>
        <div id="right">
          <div id="top">
            <img src={images[1]} alt="" />
          </div>
          <div id="bottom">
            <img src={images[2]} alt="" />
          </div>
        </div>
      </S.TripplePhotoWrapper>
    );
  }
  function Src4() {
    return (
      <S.MaxPhotoWrapper>
        <div className="row">
          <div>
            <img src={images[0]} alt="" />
          </div>
          <div>
            <img src={images[1]} alt="" />
          </div>
        </div>
        <div className="row">
          <div>
            <img src={images[2]} alt="" />
          </div>
          <div>
            <img src={images[3]} alt="" />
          </div>
        </div>
      </S.MaxPhotoWrapper>
    );
  }

  const [onoff, setOnoff] = useState(false);
  const [profileOnoff, setProfileOnoff] = useState(false);
  useEffect(()=>{
    console.log(comment)
  })

  return (
    <S.TotalWrapper id={id} >
      <S.Wrapper>
        <S.HeadWrapper>
          <div id="profileWrapper">
            <S.ProfileImg src={writer.profile_url ? writer.profile_url : DEFPROFILE} />
            <S.ProfileTextWrapper>
              <S.ProfileName>{writer.name}</S.ProfileName>
              <S.ProfileDate>{date}</S.ProfileDate>
            </S.ProfileTextWrapper>
          </div>
          {
            usePath() === '/main/mypage'?

          <div id="moreWrapper">
            <img
              src={MORE}
              alt=""
              onClick={() => {
                setOnoff(!onoff);
              }}
            />
            {onoff ? (
              <S.MoreFocus id="moreFocus">
                <S.MoreModal>
                  <S.ModalRowAlign style={{ borderBottom: "1px solid black" }} onClick={()=>{
                    onEdit(id);
                    
                    setInfo(null);
                    setInfo({
                      title:title,
                      images:images,
                      info:postinfo,
                      tags:targets,
                      id:id
                    })
                  }}>
                    <img src={EDIT} alt="" />
                    <p>게시물 수정</p>
                  </S.ModalRowAlign>
                  <S.ModalRowAlign onClick={()=>onDelete(id)}>
                    <img src={DELETE} alt="" />
                    <p>게시물 삭제</p>
                  </S.ModalRowAlign>
                </S.MoreModal>
              </S.MoreFocus>
            ) : (
              <></>
            )}
          </div>
          :<></>
          }
        </S.HeadWrapper>
        <S.TagsWrapper>
          <EachTag type={targets} />
        </S.TagsWrapper>
        <S.BodyWrapper>
          <S.Title>{title}</S.Title>
          <S.Info>{postinfo}</S.Info>
        </S.BodyWrapper>
      </S.Wrapper>
      {srccount === 1 ? (
        <Src1 />
      ) : srccount === 2 ? (
        <Src2 />
      ) : srccount === 3 ? (
        <Src3 />
      ) : srccount === 4 ? (
        <Src4 />
      ) : (
        <></>
      )}
      <S.FooterWrapper>
        <S.ThumbsWrapper>
          <S.Thumb src={THUMB} />
          <p>{liked}</p>
        </S.ThumbsWrapper>
        {ismypage ? <></> : <p>댓글 {commentCount}</p>}
      </S.FooterWrapper>
      {ismypage ? <></> : <Comments forceupdate={forceupdate} comment={comment} count={commentCount} id={id} profile={profile}/>}
    </S.TotalWrapper>
  );
}

export default EachBlock;
