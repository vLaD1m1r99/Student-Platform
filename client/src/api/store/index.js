import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import coursesSlice from './courses';
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesSlice.reducer,
  },
});
export default store;
