import { createSlice } from '@reduxjs/toolkit';

const addModalSlice = createSlice({
  name: 'addModal',
  initialState: null,
  reducers: {
    setAddModal: (state, action) => action.payload,
  },
});

export default addModalSlice.reducer;
export const { setAddModal } = addModalSlice.actions;
