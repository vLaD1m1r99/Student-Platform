import * as api from '../index.js';
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: { authData: null },
  reducers: {
    auth(state, action) {
      localStorage.setItem('profile', JSON.stringify(action.payload));
      state.authData = action.payload;
    },
    updateUserInfo(state, action) {
      var user = JSON.parse(localStorage.getItem('profile'));
      user.result = action.payload;
      localStorage.setItem('profile', JSON.stringify(user));
      state.authData = user;
    },
    logout(state) {
      localStorage.clear();
      state.authData = null;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(authActions.auth(data));
    navigate('/wizard');
  } catch (error) {
    console.log(error.message);
  }
};
export const updateUserInfo = (id, formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.updateUserInfo(id, formData);
    dispatch(authActions.updateUserInfo(data));
    navigate('/userHomePage');
  } catch (error) {
    console.log(error.message);
  }
};
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(authActions.auth(data));
    navigate(data.result.userInfoWizardDone ? '/userHomePage' : '/wizard');
  } catch (error) {
    console.log(error);
  }
};
