import axios from 'axios';
//Our route
const API = axios.create({
  // baseURL: 'https://mern-platform-server.onrender.com',
  baseURL: 'http://localhost:5000',
});
//Occurse before all the bellow requests
//Google is result and custom is token
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    JSON.parse(localStorage.getItem('profile')).token === undefined
      ? (req.headers['Authorization'] = `Bearer ${
          JSON.parse(localStorage.getItem('profile')).result
        }`)
      : (req.headers['Authorization'] = `Bearer ${
          JSON.parse(localStorage.getItem('profile')).token
        }`);
  }

  return req;
});
export const signIn = (formData) => API.post('/user/signIn', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);
export const fetchCourses = () => API.get('/courses');
export const createCourse = (newCourse) => API.post('/courses', newCourse);
export const updateCourse = (id, updatedCourse) =>
  API.patch(`./courses/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`./courses/${id}`);
