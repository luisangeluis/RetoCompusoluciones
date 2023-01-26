import { configureStore } from '@reduxjs/toolkit';
import showModal from './slices/showModal.slice';
import addModal from './slices/addModal.slice';

export default configureStore({
  reducer: {
    showModal,
    addModal,
  },
});
