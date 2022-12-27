import * as api from '../index.js';
import { createSlice } from '@reduxjs/toolkit';
const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
  },
  reducers: {
    fetchAll(state, action) {
      state.courses = action.payload;
    },
    create(state, action) {
      state.courses = [...state.courses, action.payload];
    },
    delete(state, action) {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    update(state, action) {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});
export const coursesActions = coursesSlice.actions;
export default coursesSlice;

export const getCourses = () => async (dispatch) => {
  try {
    dispatch(coursesActions.toggleLoading());
    const { data } = await api.fetchCourses();
    dispatch(coursesActions.fetchAll(data));
    dispatch(coursesActions.toggleLoading());
  } catch (error) {
    console.log(error.message);
  }
};
export const createCourse = (newCourse) => async (dispatch) => {
  try {
    dispatch(coursesActions.toggleLoading());
    const { data } = await api.createCourse(newCourse);
    dispatch(coursesActions.create(data));
    dispatch(coursesActions.toggleLoading());
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);
    dispatch(coursesActions.delete(id));
  } catch (error) {
    console.log(error);
  }
};
export const updateCourse = (id, updatedCourse) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, updatedCourse);
    dispatch(coursesActions.update(data));
  } catch (error) {
    console.log(error);
  }
};
