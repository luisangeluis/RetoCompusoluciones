import { createSlice } from '@reduxjs/toolkit';

const setItemSlice = createSlice({
  name: 'setItem',
  initialState: null,
  reducers: {
    setItem: (state, action) => action.payload,
  },
});

export default setItemSlice.reducer;
export const { setItem } = setItemSlice.actions;
