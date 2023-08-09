import React, { useState } from 'react'
import styled from 'styled-components' 
import haeundaeData from './data/haeundaeData'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 50px;
`

const Tit = styled.div`
  width: 100%;

  h4{
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    padding-left: 10px;

    @media (min-width: 768px) {
      font-size: 22px;
    }


  }
`

const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;


  .itembox{
    width: calc(50% - 15px);
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  
    &:nth-child(2n){
      margin-right: 10px;
    }
    @media (min-width: 768px) {
      width: calc(33.3333% - 13.3333px);

      &:nth-child(2n){
      margin-right: 0;
    }
      &:nth-child(3n){
        margin-right: 10px;
      }
    }
  }
  .item_img_wrap{
    width: 100%;
  }
  .item_img_wrap img{
    width: 100%;
    height: 170px;
    @media (min-width: 768px) {
      height: 270px;
    }
  }

  .item_tit{
    text-align: center;
    margin-bottom: 10px;
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
  .item_loca{
    font-size: 12px;
    min-height: 45px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  .item_loca2{
    font-size: 12px;
    margin-bottom: 5px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  .item_time{
    font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  span{
    font-weight: bold;
  }
  .likebtn{
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 30px;
    cursor: pointer;
    

    @media (min-width: 768px) {
      height: 40px;
    }
  }
 

`



export default function Haeundae() {

  const [haeundae] = useState(haeundaeData)



  return (
    <div>
      <Wrap>
      <Header />
      <Tit>
        <h4>해운대 / 기장</h4>
      </Tit>

      <ItemWrap>

        {
          haeundae.map((val,idx)=>{
            return(
              <div className="itembox" key={idx}>
                <Link to={`/haeundae/detailhaeundae/${idx}`}>
                  <div className="item_img_wrap">
                    <img src={val.image} alt="img"/>
                  </div>
                  <h4 className='item_tit'>{val.title}</h4>
                  <p className='item_loca'><span>도로명주소 : </span><br/>{val.location}</p>
                  <p className='item_loca2'><span>지번 : </span>{val.location2}</p>
                  <p className='item_time'><span>영업시간 : </span>{val.time}</p>
                  <button className='likebtn' type='button'>찜하기</button>
                </Link>

              </div>
            )
          })
        }

      </ItemWrap>
      <Footer/>
      </Wrap>









    </div>
  )
}
