import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { styled } from 'styled-components'
import { deleteItem } from './store'

const MapList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;

    li{
        width: 100%;
        display: flex;
    }
    li div{
        width: 25%;
    }
    img{
        width: 100%;
    }
`

export default function Cart() {
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

  return (
    <div>
        <MapList>
        
            {
               state.cart.map((val,idx)=>{
                return(
                    <li className='item_list' key={val}>
                        <div className='cart_idx'>{idx + 1}</div>
                        <div className="cart_img">
                           <img src={state.cart[idx].image} alt="img" /> 
                        </div>
                        <div className="cart_tit">{state.cart[idx].title}</div>
                        <div className="cart_delete"><button onClick={()=>dispatch(deleteItem(state.cart[idx].id))}>삭제</button></div>
                    </li>
                )
               })
            }
        </MapList>
    </div>
  )
}
