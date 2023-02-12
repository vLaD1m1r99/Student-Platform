import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  Auth,
  ResponsiveDrawer,
  UserInfo,
  Admin,
} from './components';
import RequireAuth from './routing/RequireAuth';

const App = () => {
  return (
    <div
      sx={{
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        width: '100vw',
      }}
    >
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path='/' exact element={<HomePage />} />
          <Route path='/auth' exact element={<Auth />} />

          {/* Protected routes */}
          <Route element={<RequireAuth authRoles={['Admin', 'User']} />}>
            <Route path='/userInfo' exact element={<UserInfo />} />
            <Route path='/userHomePage' exact element={<ResponsiveDrawer />} />
          </Route>
          {/* Admin privilaged pages */}
          <Route element={<RequireAuth authRoles={['Admin']} />}>
            <Route path='/admin' exact element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
