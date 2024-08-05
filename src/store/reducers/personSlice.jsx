import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  info: null,
}

const personSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    //actions go here
    loadperson: (state, action) =>{
      state.info = action.payload;
    },
    removeperson: (state) => {
      state.info = null;
    } 
  }
})

export const { loadperson, removeperson } = personSlice.actions

export default personSlice.reducer