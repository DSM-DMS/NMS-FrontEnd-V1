import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getBaseurl } from "../../../../../functions/getBaseurl";
import DEFPROFILE from '../../../../../assets/images/main/propfile.png'

import { S } from "./style";

function MainComment({Ref, value ,profile,comment,setComment,forceupdate}) {
  const [replyToggle, setReplyToggle] = useState(false);
  const replyCount = value.reply_count;
  const [isreply, setIsreply] = useState(replyCount ? true : false);

  const [issubreply, setIssubreply] = useState();
  const id = value.id;

  const toggleReply = () => {
    setReplyToggle(!replyToggle);
    setIsreply(replyCount ? true : !isreply);
    setIssubreply(!issubreply);
  };
  return (
    <>
      <S.MainCommentWrapper>
        <S.MainProfileWrapper>
          <S.MainProfileImg
            src={value.writer.profile_url ? value.writer.profile_url : DEFPROFILE}
          />
          {isreply ? <S.MainColBorder /> : <></>}
        </S.MainProfileWrapper>
        <div id="MainCommentWrapper">
          <S.MainTextWrapper>
            <S.ProfileName>
              {value.writer.name ? value.writer.name : "기본이름"}
            </S.ProfileName>
            <S.Info>{value.content ? value.content : "기본내용"}</S.Info>
          </S.MainTextWrapper>
          <S.CommentFootWrapper>
            <p
              onClick={() => {
                toggleReply();
              }}
            >
              답글달기
            </p>
            <p>·{value.created_date ? value.created_date : "기본시간"}</p>
          </S.CommentFootWrapper>
        </div>
      </S.MainCommentWrapper>
      {value.replies.map((value, index) => {
        return (
          <SubComment
            value={value}
            isreply={index === replyCount - 1 ? issubreply : true}
          />
        );
      })}
      {replyToggle ? <WriteReply Ref={Ref} id={id} profile={profile} comment={comment} setComment={setComment} forceupdate={forceupdate} /> : <></>}
    </>
  );
}

function SubComment({  isreply, value }) {
  return (
    <S.MainCommentWrapper style={{ marginLeft: "20px" }}>
      <S.SubProfileWrapperWrapper>
        <S.SubProfileWrapper>
          <div id="subrowborder">
            <S.SubRowBorder />
            {isreply ? (
              <S.SubRowBorder style={{ borderBottom: "none" }} />
            ) : (
              <></>
            )}
          </div>

          <S.SubProfileImg
            src={value.writer.profile_url ? value.writer.profile_url : DEFPROFILE}
          />
        </S.SubProfileWrapper>
        {isreply ? <S.SubColBorder /> : <></>}
      </S.SubProfileWrapperWrapper>
      <div id="MainCommentWrapper">
        <S.MainTextWrapper>
          <S.ProfileName>
            {value.writer.name ? value.writer.name : "기본이름"}
          </S.ProfileName>
          <S.Info>{value.content ? value.content : "기본내용"}</S.Info>
        </S.MainTextWrapper>
        <S.CommentFootWrapper>
          <p>{value.created_date ? value.created_date : "기본시간"}</p>
        </S.CommentFootWrapper>
      </div>
    </S.MainCommentWrapper>
  );
}

function WriteReply({Ref, id ,setComment, profile ,comment ,forceupdate}) {
  const inputRef = useRef();
  const onWrite = (noticeid) => {
    const header = {
      Authorization: "Bearer " + window.localStorage.getItem("access_Token"),
    };
    const body = {
      content: inputRef.current.value,
    };
    console.log(profile)
    axios
      .post(getBaseurl() + `/reply?comment-id=${noticeid}`, body, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
        const newComment = {
          content: inputRef.current.value,
          created_date:'방금',
          id:null,
          writer:{
            id:null,
            name:profile.name,
            profile_url:profile.img
          }
        };
        console.log('arr:',comment)
        const newarr = comment.map((value,index)=>value.id === id?{...value,replies:value.replies.concat(newComment)}:value);
        setComment(newarr);
        forceupdate(Ref);
      });
  };

  return (
    <S.MainCommentWrapper
      style={{ marginLeft: "20px", alignItems: "center", marginBottom: "20px" }}
    >
      <S.SubProfileWrapperWrapper>
        <S.SubProfileWrapper
          style={{ height: "40px", display: "flex", alignItems: "center" }}
        >
          <div id="subrowborder">
            <S.SubRowBorder style={{ marginBottom: "20px", height: "20px" }} />
          </div>

          <S.SubProfileImg src={profile.img?profile.img:DEFPROFILE} />
        </S.SubProfileWrapper>
      </S.SubProfileWrapperWrapper>
      <S.ReplyWrapper>
        <S.ReplyInput placeholder="댓글을 남겨보세요..." ref={inputRef} />
        <S.WriteButton
          onClick={() => {
            onWrite(id);
          }}
        >
          <p>작성</p>
        </S.WriteButton>
      </S.ReplyWrapper>
    </S.MainCommentWrapper>
  );
}

function WriteComment({Ref, src, id, setComment, profile ,comment,forceupdate}) {
  const inputRef = useRef();

  

  const onWrite = (noticeid) => {
    const header = {
      Authorization: "Bearer " + window.localStorage.getItem("access_Token"),
    };
    const body = {
      content: inputRef.current.value,
    };

    axios
      .post(getBaseurl() + `/comment?notice-id=${id}`, body, {
        headers: header,
      })
      .then((res) => {
        console.log(profile);
        const newComment = {
          content: inputRef.current.value,
          created_date:'방금',
          id:null,
          replies:[],
          reply_count:0,
          writer:{
            id:null,
            name:profile.name,
            profile_url:profile.img
          }
        };
        setComment(comment.concat(newComment));
        forceupdate(Ref);
      });
  };

  return (
    <S.WriteCommentWrapper>
      <S.Profile src={src ? src : DEFPROFILE} />
      <S.ReplyWrapper style={{ width: "795px" }}>
        <S.ReplyInput placeholder="댓글을 남겨보세요..." ref={inputRef} />
        <S.WriteButton onClick={() => onWrite(id)}>
          <p>작성</p>
        </S.WriteButton>
      </S.ReplyWrapper>
    </S.WriteCommentWrapper>
  );
}

function Comments({ comment, count, id, profile,forceupdate }) {
  
  const Ref = useRef();
  const [comments, setComment] = useState(comment);
  useEffect(()=>{
    console.log(profile)
    console.log('comment:',comment)
    console.log('마운트');
  },[])
  if(comments)
  return (
    <>
      <S.TotalWrapper ref={Ref}>
        {comments.length ? <S.TitleText>댓글 모두보기</S.TitleText> : <></>}
        {comments
          ? comments.map((value, index) => {
              console.log("댓글", value);
              return (
                <>
                  <MainComment
                  Ref={Ref}
                    id={value.id}
                    value={value}
                    comment = {comment}
                    setComment={setComment}
                    profile={profile}
                    forceupdate={forceupdate}
                  />
                </>
              );
            })
          : ""}
        <WriteComment Ref={Ref} id={id} setComment={setComment} comment={comment} profile={profile} forceupdate={forceupdate} />
      </S.TotalWrapper>
    </>
  );
  else{
    return(<></>)
  }
}

export default Comments;
