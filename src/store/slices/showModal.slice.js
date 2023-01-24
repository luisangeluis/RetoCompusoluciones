import { createSlice } from '@reduxjs/toolkit';

const showModalSlice = createSlice({
  name: 'showModal',
  initialState: false,
  reducers: {
    setShowModal: (state, action) => {
      console.log(state);
      return action.payload;
    },
  },
});

export default showModalSlice.reducer;
export const { setShowModal } = showModalSlice.actions;
