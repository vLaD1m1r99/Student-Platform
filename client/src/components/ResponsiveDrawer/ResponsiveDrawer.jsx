import * as React from 'react';
import { useState, useEffect } from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, IconButton, Button} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AccountDetails from '../AccountDetails/AccountDetails';
import ShowAllCourses from '../Courses/ShowAllCourses/ShowAllCourses';
import { getCourses } from '../../api/store/courses';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import MyCourses  from '../Courses/MyCourses/MyCourses';
import { authActions } from '../../api/store/auth';

const drawerWidth = 240;

//Deo sa stranicama
const pages = [{name: 'Account', page: <AccountDetails/>, icon: <ManageAccountsIcon/>}, {name: 'My Courses', page: <MyCourses/>, icon: <AddCircleIcon/>}, {name: 'All Courses', page: <ShowAllCourses/>, icon: <SchoolIcon/>} ]


const ResponsiveDrawer = (props) => {
//User deo
const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch(authActions.logout());
    navigate('/');
    setUser(null);
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(()=> {
     //Gets all Courses to the store
    dispatch(getCourses());
    //Check if google or custom signIn
    var token;
    user?.token === undefined ? token = user.result : token = user?.token;
    //If token expired just logout
    //Ne radi
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.exp *1000 < new Date().getTime()) logout();

    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location, dispatch]);
//Deo sa stranicama
  const[selectedPage, setSelectedPage] = useState(pages[0].page);// Startuje sa prvom stranom

//Drawer deo
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((p, index) => (
          <ListItem key={p.name} disablePadding>
            <ListItemButton onClick={()=> {
              setSelectedPage(p.page);
            }}>
              <ListItemIcon sx={{color: 'primary.main'}}>
                {p.icon}
              </ListItemIcon>
              <ListItemText primary={p.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {user.userObject !== undefined ?   user.userObject.name 
            : user.result.name}
          </Typography>
          <Button variant='contained' color='secondary' sx={{ml: 'auto'}} onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       {/* Selected page that will show on feed */}
        {selectedPage}
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;