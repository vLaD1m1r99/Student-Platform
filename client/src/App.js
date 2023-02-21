import { CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import {
  HomePage,
  Auth,
  ResponsiveDrawer,
  Admin,
  UserInfoWizard,
} from './components';
import RequireAuth from './routing/RequireAuth';
import RequireNotAuth from './routing/RequireNotAuth';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Public pages */}
        <Route path='/' index element={<HomePage />} />
        {/* Protected if loged in */}
        {/* <Route element={<RequireNotAuth />}> */}
        <Route path='auth' element={<Auth />} />
        {/* </Route> */}
        {/* Protected by authentication pages */}
        <Route element={<RequireAuth authRoles={['Admin', 'User']} />}>
          <Route path='userHomePage' element={<ResponsiveDrawer />} />
          <Route path='wizard' element={<UserInfoWizard />} />
        </Route>
        {/* Admin privilaged pages */}
        <Route element={<RequireAuth authRoles={['Admin']} />}>
          <Route path='admin' exact element={<Admin />} />
        </Route>
      </Route>
    )
  );
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
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
