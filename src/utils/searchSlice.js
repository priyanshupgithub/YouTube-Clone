import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState :{

  },
  reducers:{
    cacheResults:(state,action) =>{
        // {"ip":["iphone","iphone 11"]}  // this will be from the action
        // state = {...action.payload, ...state}; // this will merge the state and the payload and final result will store in the state
        state = Object.assign(state,action.payload)
    },
  }, 
});


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;

