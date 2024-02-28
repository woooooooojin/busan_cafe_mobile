import Header from '../components/Header'
import styled from 'styled-components' 
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BannerSwiper from '../components/BannerSwiper'
import ChannelTalk from '../components/ChannelTalk'
import MainItemSwiper from '../components/MainItemSwiper'

const FlexBox = styled.div`
  width: 100%;
  height: calc(100vh - 60px - 50px - 100px);
  text-align: center;
  line-height: 70px;
  font-size: 14px;
 

 

  @media (min-width: 768px) {
    margin-bottom: 70px;
       
    }
    @media (min-width: 1440px) {
      margin-bottom: 70px;
    }
 .main_wrap{
    @media (min-width: 768px) {
        padding: 30px;
    }
    @media (min-width: 1440px) {
          padding:50px;
    }
 }

  .box1{
    margin-top: 10px;
  }

  .box1, .box2, .box3, .box4{
    width: 100%;
    margin-bottom: 10px;
    display: flex;
  }
  .box1 div, .box2 div, .box3 div, .box4 div{
    @media (min-width: 768px) {
          height: 100px;
          line-height: 100px;
          font-size: 20px;
          color: #444;
    }
    @media (min-width: 1440px) {
          height: 150px;
          line-height: 150px;
          font-size: 24px;
          color: #444;
    }
    transition: .3s;
    &:hover{
      box-shadow: 0 0 15px #777;
    }
  }
  a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .box1_1{
    width: calc(25% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 15px;
    background-color: #F6F4EB;
  }
  .box1_2{
    width: calc(50% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #D4E2D4;
  }
  .box1_3{
    width: calc(25% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #F4F2DE;
  }

  
  .box2_1{
    width: calc(50% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 15px;
    background-color: #DFD7BF;
  }
  .box2_2{
    width: calc(25% - 13.3333px);;
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #F2EAD3;
  }
  .box2_3{
    width: calc(25% - 13.3333px);;
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #FFEECC;
  }


  .box3_1{
    width: calc(25% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 15px;
    background-color: #ECE5C7;
  }
  .box3_2{
    width: calc(25% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #ECE5C7;
  }
  .box3_3{
    width: calc(50% - 13.3333px);
    height: 70px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #C2DEDC;
  }
  .box4_1{
    width: calc(100% - 20px);
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 15px;
    background-color: #CEE6F3;
  }

`
const Banner = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const CommunityBtn = styled.button`
  width: calc(100% - 20px);
  height: 55px;
  line-height: 50px;
  background-color: #fff;
  border: 2.5px dashed #749BC2;
  border-radius: 10px;
  letter-spacing: 5px;
  /* margin-bottom: 50px; */
  margin-top: 10px;
  @media (min-width: 768px) {
        width: 250px;
  }
  @media (min-width: 1440px) {
        width: 500px;
        height: 80px;
        line-height: 80px;
  }
  a{
    font-weight: 550;
    font-size: 20px;
    color: #749BC2;


    @media (min-width: 1440px) {
        font-size: 28px;
  }
  } 


`
const Title = styled.h4`
  margin-top: 10px;
  text-align: center;
  letter-spacing: 5px;
  color: black;
  position: relative;
  font-weight: 500;
  font-size: 20px;

  &::before,
  &::after {
    content: '[';
    display: inline-block;
    position: relative;
    top: 1px;
    height: 100%;
    color: steelblue;
    font-size: 25px;
  }

  &::after { content: ']'; }
`



export default function Main() {

  return (
    <div>
      <Header/>

        <MainItemSwiper/>

         
        {/* <Banner>
            <BannerSwiper/>
        </Banner> */}


        <FlexBox> 
         
        <div className="main_wrap">
          <div className="box1">
            <div className="box1_1"><Link to='/bukgu'>북구</Link></div>
            <div className="box1_2"><Link to = '/Dongrae'>금정 / 동래</Link></div>
            <div className="box1_3"><Link to='/yeonjae'>연제구</Link></div>
          </div>

          <div className="box2">
            <div className="box2_1"><Link to='/jingu'>부산진구</Link></div>
            <div className="box2_2"><Link to ='/jungu'>중구 / 영도</Link></div>
            <div className="box2_3"><Link to = '/seogu'>서구 / 동구</Link></div>
          </div>

          <div className="box3">
            <div className="box3_1"><Link to='/gangseo'>강서구</Link></div>
            <div className="box3_2"><Link to='/sasang'>사상 / 사하</Link></div>
            <div className="box3_3"><Link to='/suyeong'>수영 / 광안리 / 남구</Link></div>
          </div>

          <div className="box4">
            <div className="box4_1"><Link to='/haeundae'>해운대 / 기장</Link></div>
          </div>
        </div>


        <CommunityBtn>
          <Link to='/community'>Community</Link>
        </CommunityBtn>
        </FlexBox> 


        


        <ChannelTalk/>

      <Footer/>


    </div>
  )
}
