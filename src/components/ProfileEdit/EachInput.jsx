import { useEffect, useRef } from "react";
import { S } from "./style";

function Inputs({
  title,
  img,
  ness,
  width,
  readonly,
  fullwidth,
  placeholder,
  onClick,
  value,
  toggle,
  ref,
  onChange
}) {
  const inputRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(value&&(inputRef.current.value) !== undefined){
        console.log('value',value)
        console.log(inputRef.current.value,title)
        inputRef.current.value = value
        
      }
      
    },1000)
  })
  const w = width ? width : 338;
  const w2 = fullwidth ? "97%" : "88%";
  const readOnly = readonly ? readonly : false;
  if (toggle !== undefined) {
    return (
      <S.InputWrapperWrapper
        width={w}
        onClick={
          onClick
            ? () => {
                onClick();
              }
            : ()=>{}
        }
      >
        <S.InputTitle>
          {title} {ness ? <span>*</span> : ""}
        </S.InputTitle>
        <S.InputWrapper style={toggle?{borderColor:"#4D91C6"}:{color:"#707070"}}>
          <p ref={inputRef} style={{ width: w2 }}>{value ? value : ""}</p>
          <S.InputImgWrapper>
            <img src={img} alt="" />
          </S.InputImgWrapper>
        </S.InputWrapper>
      </S.InputWrapperWrapper>
    );
  }
  return (
    <S.InputWrapperWrapper
      width={w}
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : {}
      }
    >
      <S.InputTitle>
        {title} {ness ? <span>*</span> : ""}
      </S.InputTitle>
      <S.InputWrapper>
        <S.Input
          readOnly={readOnly}
          style={{ width: w2 }}
          placeholder={placeholder}
          displaceholder={readOnly}
          ref={inputRef}
          onChange={(e)=>onChange(title,e)}
        />
        <S.InputImgWrapper>
          <img src={img} alt="" />
        </S.InputImgWrapper>
      </S.InputWrapper>
    </S.InputWrapperWrapper>
  );
}

export default Inputs;
