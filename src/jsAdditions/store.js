import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import histogramsSlice from './histogramsSlice'; 
import cardsDataSlice from './cardsDataSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    histograms: histogramsSlice,
    cards: cardsDataSlice
  },
  devTools: true
})