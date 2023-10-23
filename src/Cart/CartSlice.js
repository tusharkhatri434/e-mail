import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        read:[],
        unread:[],
        favourite:[]
    },
    reducers:{
        addItems:(state,action)=>{
          state.items=[action.payload]
        },
        readItems:(state,action)=>{
            state.read.push(action.payload);
        },
        unreadItems:(state,action)=>{
           state.unread.push(action.payload);
        },
        favouriteItems:(state,action)=>{
            if(state.favourite === action.payload){
                state.favourite.pop(action.payload);
            }
            else{
                state.favourite = [...state.favourite,action.payload]
            }
        }
    }
});
export const {addItems,readItems,unreadItems,favouriteItems} = CartSlice.actions;
export default CartSlice.reducer;