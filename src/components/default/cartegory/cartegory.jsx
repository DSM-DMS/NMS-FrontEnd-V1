import React from "react";
import { S } from "./style";
import BIGCIRCLE from "../../../assets/images/main/cartegory/bigcircle.svg";
import BIGCIRCLEBLUE from "../../../assets/images/main/cartegory/bigbluecircle.svg";
import ARROWOPEN from "../../../assets/images/main/cartegory/arrowopen.svg";
import ARROWCLOSE from "../../../assets/images/main/cartegory/arrowclose.svg";
import SMALLCIRCLE from "../../../assets/images/main/cartegory/smallcircle.svg";
import SMALLCIRCLEBLUE from '../../../assets/images/main/cartegory/bluesmallcircle.svg'
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {usePath} from "../../../functions/usePath";

function Cartegory() {
  const [tcart, setTcart] = useState(false);
  const [tgrade, setTgrade] = useState(false);
  const [path, setPath] = useState(usePath());
  const nevigate = useNavigate();

  function Blocks({ src, text, grade, onClick , style }) {
    return (
      <S.CartegoryWrapper
        style={style ? style : {}}
        onClick={
          onClick
            ? () => {
                onClick();
                setPath(window.location.pathname);
              }
            : {}
        }
      >
        <S.IconWrapper grade={!grade ? 1 : 2}>
          <S.Icons src={src} />
        </S.IconWrapper>
        <S.CartegoryText>{text}</S.CartegoryText>
      </S.CartegoryWrapper>
    );
  }

  const selected={
      fontSize:'16px',
      fontWeight:'bold',
      color:'#4D91C6'
  }

  return (
    <S.Cartegory>
      <Blocks
        src={path === "/main/all" ? BIGCIRCLEBLUE : BIGCIRCLE}
        style={path === '/main/all' ? selected : ''}

        text={"전체 공지"}
        onClick={() => {
          nevigate("/main/all");
        }}
      />

      <Blocks
        onClick={() => {
          setTcart(!tcart);
        }}
        src={!tcart ? ARROWCLOSE : ARROWOPEN}
        text={"카테고리(2)"}
      />
      {tcart ? (
        <>
          <Blocks
            src={path === "/main/inschool" ? SMALLCIRCLEBLUE : SMALLCIRCLE}
            style={path === '/main/inschool' ? selected : ''}
            grade={2}
            text={"교내 공지"}
            onClick={() => {
              nevigate("/main/inschool");
            }}
          />
          <Blocks
            src={path === "/main/outschool" ? SMALLCIRCLEBLUE : SMALLCIRCLE}
            style={path === '/main/outschool' ? selected : ''}

            grade={2}
            text={"교외 공지"}
            onClick={() => {
              nevigate("/main/outschool");
            }}
          />
        </>
      ) : (
        <></>
      )}
      <Blocks
        onClick={() => {
          setTgrade(!tgrade);
        }}
        src={!tgrade ? ARROWCLOSE : ARROWOPEN}
        text={"학년별(3)"}
      />
      {tgrade ? (
        <>
          <Blocks
            src={path === "/main/grade/1" ? SMALLCIRCLEBLUE : SMALLCIRCLE}
            style={path === '/main/grade/1' ? selected : ''}

            grade={2}
            text={"1학년 공지"}
            onClick={() => {
              nevigate("/main/grade/1");
            }}
          />
          <Blocks
            src={path === "/main/grade/2" ? SMALLCIRCLEBLUE : SMALLCIRCLE}
            style={path === '/main/grade/2' ? selected : ''}

            grade={2}
            text={"2학년 공지"}
            onClick={() => {
              nevigate("/main/grade/2");
            }}
          />
          <Blocks
            src={path === "/main/grade/3" ? SMALLCIRCLEBLUE : SMALLCIRCLE}
            style={path === '/main/grade/3' ? selected : ''}

            grade={2}
            text={"3학년 공지"}
            onClick={() => {
              nevigate("/main/grade/3");
            }}
          />
        </>
      ) : (
        <></>
      )}
    </S.Cartegory>
  );
}

export default Cartegory;
