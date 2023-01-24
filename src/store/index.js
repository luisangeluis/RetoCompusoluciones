import { configureStore } from '@reduxjs/toolkit';
import showModal from './slices/showModal.slice';

export default configureStore({
  reducer: {
    showModal,
  },
});
