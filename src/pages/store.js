import {configureStore, createSlice } from '@reduxjs/toolkit';


const cart = createSlice({

    name : 'cart',
    initialState : [],
    reducers : {
        addItem(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload.id})
            if(index>-1){
                state[index].count++
            }else{
                state.push(action.payload)
            }
           
        },
        deleteItem(state,action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            const ok = window.confirm('삭제 하시겠습니까?')
            if(ok){
                state.splice(index,1)

            }else if(!ok){
                return
            }
            
        },
        deleteAll(state,action){
            const ok = window.confirm('전체삭제 하시겠습니까?')
            if(ok){
                return []

            }else if(!ok){
                return
            }

        },
        // addCount(state,action){
        //     const index = state.findIndex((findId)=>{return findId.id === action.payload})
        //     state[index].count++
        // },
        // minCount(state,action){
        //     const index = state.findIndex((findId)=>{return findId.id === action.payload})
        //     if(state[index].count > 1){
        //         state[index].count--
    
        //     }
        // },
      
        
    }


})



export const {addItem,deleteItem,deleteAll} = cart.actions 
//dispatch와 짝


export default configureStore({
    reducer : {
        cart: cart.reducer
    }
})
//useSelector와 짝