import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, Auth, ResponsiveDrawer } from './components';

const App = () => {
  // let user;
  // useEffect(() => {
  //   user = JSON.parse(localStorage.getItem('profile'));
  // });
  return (
    <BrowserRouter>
      <div
        sx={{
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
          width: '100vw',
        }}
      >
        <CssBaseline />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route
            path='/auth'
            exact
            // element={!user ? <Auth /> : <Navigate replace to='/userHomePage' />}
            element={<Auth />}
          />
          <Route
            path='/userHomePage'
            exact
            // element={
            //   user ? <ResponsiveDrawer /> : <Navigate replace to='/auth' />
            // }
            element={<ResponsiveDrawer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
