import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { styled } from 'styled-components'
import { deleteAll, deleteItem } from './store'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Wrap = styled.div`
    width: 100%;
    padding-bottom: 80px;


    .none{
        text-align: center;
        font-size: 24px;
        margin-top: 30px;
        color: #888;
    }
`

const MapList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 120px; */

    li{
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        border: 1px solid #eee;
        border-bottom: 0;
        padding: 5px;
        &:last-child{
            border-bottom: 1px solid #eee;
        }
    }
    .cart_idx{
        width: 10%;
        font-size: 14px;
    }
    .cart_img{
        width: 30%;
        font-size: 0;
    }


    img{
        width: 100%;
        height: 120px;
        border-radius: 10px;
        @media (min-width: 768px) {
            height: 235px;
        }
    }
    .cart_tit{
        width: 45%;
        padding: 0 5px;
    }

    .cafe_tit{
        font-weight: bold;

    }
    .cafe_loca{
        font-size: 14px;
        margin-top: 5px;
    }

    .cart_delete{
        width: 15%;
    }
    .cart_delete button{
        width: 27px;
        height: 27px;
        background-color: #fff;
        border: 1px solid tomato;
        color: tomato;
        border-radius: 50%;
    }


`
const TitleBox = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    
    h4{
        text-align: center;
        font-size: 20px;
    }
`

const DeleteAll = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 30px;

    button{
        width: 150px;
        height: 35px;
        border: 1px solid tomato;
        background-color: #fff;
        border-radius: 20px;
        color: tomato;


    }
  
`
export default function Cart() {
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    if(state.cart.length <= 0){
        return(
            <div>
                <Header/>

                <Wrap>

                <TitleBox>
                    <h4>찜 리스트</h4>
                </TitleBox>

                <p className='none'>리스트가 비었어요 ㅠ.ㅠ</p>

                

                <DeleteAll>
                    <button onClick={()=>dispatch(deleteAll())}>전체삭제</button>
                </DeleteAll>
                </Wrap>






                <Footer/>

            
            </div>
        )
    }

  return (
    <div>
        <Header/>

        <Wrap>

        <TitleBox>
            <h4>찜 리스트</h4>
        </TitleBox>

        <MapList>
        
            {
               state.cart.map((val,idx)=>{
                return(
                    <li className='item_list' key={val}>
                        <div className='cart_idx'>{idx + 1}</div>
                        <div className="cart_img">
                           <img src={state.cart[idx].image} alt="img" /> 
                        </div>
                        <div className="cart_tit">
                          <p className='cafe_tit'> {state.cart[idx].title}</p> 
                          <p className='cafe_loca'> {state.cart[idx].loca}</p> 
                        </div>
                        <div className="cart_delete"><button onClick={()=>dispatch(deleteItem(state.cart[idx].id))}>X</button></div>
                    </li>
                )
               })
            }



        </MapList>

        <DeleteAll>
            <button onClick={()=>dispatch(deleteAll())}>전체삭제</button>
        </DeleteAll>
        </Wrap>
       
        




        <Footer/>
    </div>
  )
}
