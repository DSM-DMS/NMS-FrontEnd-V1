import React, { useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import MyDropzone from "./dropzone";
import { S } from "./style";
import X from "../../assets/images/main/Write/x.svg";
import axios from "axios";
import { getBaseurl } from "../../functions/getBaseurl";
import DEFPROFILE from '../../assets/images/main/propfile.png'
import { useNavigate } from "react-router-dom";

function WriteNotice({profile}) {
  const [imgfiles, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const nextid = useRef(0);
  const textareaRef = useRef();
  const navigate = useNavigate();

  const onDelete = (id) => {
    setFiles(imgfiles.filter((value) => value.id !== id));
    setPreview(preview.filter((value) => value.id !== id));
  };
  function resize() {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = "1px";
    textareaRef.current.style.height =
      12 + textareaRef.current.scrollHeight + "px";
  }

  const titleRef = useRef();
  const boxes = useRef([]);

    const tags = useRef(["SCHOOL"]);
    const setTags =(arr) => {
        tags.current = arr;
    }  

  const editTag = (method) => {
    switch (method) {
      case "in": {
        
        setTags(tags.current
            .concat("SCHOOL")
            .filter((value) => value !== "SUBURBS"))
           
        break;
      }
      case "out": {

        setTags(tags.current
            .concat("SUBURBS")
            .filter((value) => value !== "SCHOOL"));

        break;
      }
      case 1: {
        setTags(tags.current.concat("GRADE_FIRST"));
        break;
      }
      case 2: {
        setTags(tags.current.concat("GRADE_SECOND"));
        break;
      }
      case 3: {
        setTags(tags.current.concat("GRADE_THIRD"));
        break;
      }
      case "cancel": {
        setTags(
          tags.current.filter(
            (value) =>
              value !== "FIRST" && value !== "SECOND" && value !== "THIRD"
          )
        );
        boxes.current.map(value => value.checked = false);
        break;
      }
      default: {
          break;
      }
    }
    const set = new Set(tags.current);
    const result = [...set];
    setTags(result);
  };

  const onConfirm = () => {
    const header = {
        "Content-Type": "multipart/form-data",
        Authorization:'Bearer '+window.localStorage.getItem('access_Token')
    }
    const newtags = tags.current.map(value => {
        return {target_tag:value};
    })
    const body = {
      title: titleRef.current.value,
      content: textareaRef.current.value,
      tags: tags.current,
    };
    const json = JSON.stringify(body);
    const file = imgfiles.map(value => {return value.data[0]});

    const formdata = new FormData();
    
    file.map((value,index) => {
        formdata.append('images',value);
    })
    formdata.append("noticeRequest", new Blob([JSON.stringify(body)], {
        type: "application/json"
    }));

    axios({ // 전송
        method: "post",
        url: getBaseurl()+'/notice',
        data: formdata,
        headers: header
      })
      .then(res=>{
          window.location.href = '/main/all'
      })
      .catch(err=>{
          console.log(err.response)
      })
  };
  return (
    <S.TotalWrapper>
      <S.Wrapper>
        <S.HeadWrapper>
          <S.ProfileWrapper>
            <S.ProfileImg src={profile.img?profile.img:DEFPROFILE} />
            <p>{"이름"}</p>
          </S.ProfileWrapper>
        </S.HeadWrapper>
        <S.TypeWrapper>
          <S.EachRadioInputWrapper style={{ marginLeft: "12px" }}>
            <S.EachRadioInput type="radio" name="school" onClick={()=>editTag("in")} />
            <p>교내</p>
          </S.EachRadioInputWrapper>
         
        </S.TypeWrapper>
        <S.TypeWrapper>
          <S.EachRadioInputWrapper style={{ marginLeft: "12px" }}>
            <S.EachRadioInput type="radio" onClick={()=>editTag(1)} ref={cur=>boxes.current[0]=cur} />
            <p>1학년</p>
          </S.EachRadioInputWrapper>
          <S.EachRadioInputWrapper>
            <S.EachRadioInput type="radio" onClick={()=>editTag(2)}  ref={cur=>boxes.current[1]=cur}/>
            <p>2학년</p>
          </S.EachRadioInputWrapper>
          <S.EachRadioInputWrapper>
            <S.EachRadioInput type="radio" onClick={()=>editTag(3)} ref={cur=>boxes.current[2]=cur}/>
            <p>3학년</p>
          </S.EachRadioInputWrapper>
          <S.CancelCheck onClick={()=>editTag("cancel")}>선택해제</S.CancelCheck>
        </S.TypeWrapper>
        <S.ImgsWrapper>
          <S.ImgsCountWrapper>
            <S.ImgsCountName>이미지 등록</S.ImgsCountName>
            <S.ImgsCount>{"(" + preview.length + "/4)"}</S.ImgsCount>
          </S.ImgsCountWrapper>
          <S.PreviewWarpper>
            {preview.length < 4 ? (
              <MyDropzone
                imgfiles={imgfiles}
                setFiles={setFiles}
                preview={preview}
                setPreview={setPreview}
                nextid={nextid}
              />
            ) : (
              <></>
            )}
            {preview.map((value) => (
              <S.PreviewImgs img={value.data}>
                <img
                  src={X}
                  alt=""
                  onClick={() => {
                    onDelete(value.id);
                  }}
                />
              </S.PreviewImgs>
            ))}
          </S.PreviewWarpper>
        </S.ImgsWrapper>
        <S.TitleWrapper>
          <p>제목</p>
          <input type="text" placeholder="입력해주세요" ref={titleRef} />
        </S.TitleWrapper>
        <S.InfoWrapper>
          <p>내용</p>
          <textarea
            placeholder="입력해주세요"
            onKeyDown={() => resize()}
            onKeyUp={() => resize()}
            ref={textareaRef}
          ></textarea>
        </S.InfoWrapper>
        <S.ButtonsWrapper>
          <S.CancelButton onClick={()=>{}}>취소</S.CancelButton>
          <S.ConfirmButton onClick={() => onConfirm()}>
            작성
          </S.ConfirmButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.TotalWrapper>
  );
}

export default WriteNotice;
