import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import data from "../api/get";

export const initialState ={
    allItems:data.foodItems,
    status:"idle",
    foodItems:data.foodItems,
    filter:"Home"
}
export const foodSlice = createSlice({
    name:"food",
    initialState : initialState,
    reducers:{
        check:(state)=>{
            console.log("temprary");
            console.log(state.status)
            if(state.status==="idle")
                state.status = "waiting"
            
            
        },
        getFoodItems(state){
            if(state.filter==="all")
                state.foodItems = state.allItems
            else
                state.foodItems = state.allItems.filter(item=>item.type===state.filter)
        },
       setFoodItems:(state,action)=>{
           console.log("inside food....")
           console.log(action.payload)
            state.foodItems = action.payload

            if(action.payload){
                if(state.status=="idle")
                    state.status="completed"
            }
       },
       setFilter:(state,action)=>{
           console.log(action.payload)
           console.log("please work")
           state.filter=action.payload
       }
       
        
    }
})

export const {check,setFoodItems,getFoodItems,setFilter} = foodSlice.actions;
const foodReducer = foodSlice.reducer;

export default foodReducer;

