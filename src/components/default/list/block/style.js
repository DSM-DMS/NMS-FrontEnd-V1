import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    width: 888px;
    height: fit-content;
    background-color: #dbdbdb;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Noto Sans CJK KR;
    margin-bottom:30px;
  `,
  Wrapper: styled.div`
    width: 824px;
    height: fit-content;
    margin-bottom:10px;
  `,
  HeadWrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 23px;
    margin-bottom: 18px;
    justify-content:space-between;
    >#profileWrapper{
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    >#moreWrapper{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        >img{
            padding:5px 0 5px;
            
        }
    }
  `,
  ProfileImg: styled.img`
    width: 60px;
    height: 60px;
    margin-right: 16px;
    border-radius:100%;
  `,
  ProfileTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    font-family: Noto Sans CJK KR;
  `,
  ProfileName: styled.p`
    font-size: 16px;
    font-weight: bold;
  `,
  ProfileDate: styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #707070;
  `,
  TagsWrapper: styled.div`
    width: 100%;
    margin-bottom: 12px;
    display:flex;
    flex-direction:row;

  `,
  Tags: styled.div`
    height: 20px;
    width: fit-content;
    padding: 0 9px 0 9px;
    background-color: #4d91c6;
    border-radius: 30px;
    font-size: 10px;
    font-family: Noto Sans CJK KR;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:5px;
  `,
  BodyWrapper: styled.div`
    width: 100%;
  `,
  Title: styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  `,
  Info: styled.p`
    font-size: 14px;
  `,
  FooterWrapper: styled.div`
    width: 824px;
    font-size: 14px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:16px 0 16px 0;
  `,
  ThumbsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    `,
  Thumb: styled.img`

margin-right: 6px;
  `,
  SinglePhotoWrapper:styled.div`
        >img{
            width:100%;
        }
        display:flex;
        flex-direction:row;
        align-items:center;
        overflow:hidden;
        width:100%;
        height:365px;
  `,
  DoublePhotoWrapper:styled.div`
    width:100%;
    height:442px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    >div{
        width:440px;
        height:440px;

        >img{
            height:100%;
        }
        overflow:hidden;
    }
  `,
  TripplePhotoWrapper:styled.div`
    width:100%;
    height:442px;
    display:flex;
    flex-direction:row;
    box-sizing:border-box;
    justify-content:space-between;
    >#left{
        width:442px;
        height:442px;
        >img{
            height:100%;

        }
        overflow:hidden;
    }
    >#right{
        width:442px;
        height:442px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        
        >#top{
            width:442px;
            height:219px;

            >img{
                height:100%;
            }
            overflow:hidden;
        }
        >#bottom{
            width:442px;
            height:219px;

            >img{
                height:100%;
            }
            overflow:hidden;
        }
    }
  `,
  MaxPhotoWrapper:styled.div`
    height:500px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    >.row{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        >div{
            width:442px;
            height:248px;
            
            >img{
                height:100%;
            }
            overflow:hidden;
        }
    }
  `,
    MoreFocus:styled.div`
        align-self:flex-end;
        justify-self:flex-end;
        position:absolute;
        display:block;
        
    `,
    MoreModal:styled.div`
        width:120px;
        height:80px;
        background-color:white;
        top:15px;
        right:0px;
        position:absolute;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        
    `,
    ModalRowAlign:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:50%;
    width:88px;
    font-size:14px;
    font-weight:400;
    color:#707070;
    justify-content:space-between;
    `,

};
