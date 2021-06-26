import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState ={
    foodItems:[],
    status:"idle",
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
        getFoodItems(){
            
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
           state.filter=action.payload
       }
       
        
    }
})

export const {check,setFoodItems,getFoodItems,setFilter} = foodSlice.actions;
const foodReducer = foodSlice.reducer;

export default foodReducer;

