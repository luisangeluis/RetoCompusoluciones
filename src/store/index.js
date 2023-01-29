import { configureStore } from '@reduxjs/toolkit';
import showModal from './slices/showModal.slice';
import addModal from './slices/addModal.slice';
import setItem from './slices/setItem.slice';
import  getCompanies  from './slices/getCompanies.slice';
import showNotification from './slices/showNotification.slice';

export default configureStore({
  reducer: {
    showModal,
    addModal,
    setItem,
    getCompanies,
    showNotification
  },
});
