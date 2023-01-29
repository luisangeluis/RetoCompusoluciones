import { createSlice } from "@reduxjs/toolkit";

const showNotificationSlice = createSlice({
  name :'showNotification',
  initialState:null,
  reducers:{
    setShowNotification:(state,action)=>action.payload
  }
})

export default showNotificationSlice.reducer;
export const { setShowNotification} = showNotificationSlice.actions;