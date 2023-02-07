import React, {useState} from 'react'
import {Box, Avatar, Typography, Rating, Button, ToggleButtonGroup, ToggleButton, styled, IconButton} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReportIcon from '@mui/icons-material/Report';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePicture from '../../Images/profilna.jpg'
import About from './About';
import Reviews from './Reviews';
const AccountDetails = () => {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-selected': {
      color: nameColor,
      fontWeight: 'bold',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      margin: '2rem 0'
    },
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
  const nameColor = '#414141'
  const tabs = [
    {name: 'Reviews', icon: <VisibilityIcon/>, page: <Reviews/>},
    {name: 'Active Courses', icon: <EventAvailableIcon/>, page: <About/>},
    {name: 'Held Courses', icon: <FormatListBulletedIcon/>, page: <About/>},
     {name: 'Attended Courses', icon: <LibraryAddCheckIcon/>, page: <About/>}
    ]
    const [selectedPage, setSelectedPage] = useState(tabs[0].page);

     const [alignment, setAlignment] = React.useState(tabs[0].name);

  return (<>
    <Box sx={{display: 'flex', mt:1}}>
      {/* Left Side */}
      <Box mr={5} sx={{display: 'flex',flexDirection:'column', width:300, margin: '0 2rem'}}>
        <Avatar alt="Remy Sharp"
      src={profilePicture}
      sx={{ width: 300, height: 300, mb: 3 }} 
      variant="rounded"
      >
        </Avatar>
        <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>About</Typography>
        <Typography variant='body' sx={{color: nameColor}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum possimus vero ratione, cupiditate accusamus minus minima quasi aliquam voluptate reiciendis modi, mollitia sapiente corrupti neque adipisci debitis cum doloremque molestias est id architecto! Impedit sed quis autem odit et cumque perspiciatis quibusdam adipisci excepturi quae dignissimos, culpa libero recusandae ullam.</Typography>
         <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>Contact</Typography>
         <Box sx={{display:'flex', gap:6}}>
           <Typography sx={{color: nameColor}}>Email:</Typography>
           <Typography sx={{color: 'secondary.main'}}>vladastefanovic43@gmail.com</Typography>
         </Box>
         <Box sx={{display:'flex', gap:5}}>
           <Typography sx={{color: nameColor}}>Phone:</Typography>
           <Typography sx={{color: 'secondary.main'}}>+381600781823</Typography>
         </Box>
         <Box sx={{display:'flex', gap:3, ml:11}}>
            <IconButton><InstagramIcon/></IconButton>
            <IconButton><FacebookIcon/></IconButton>
            <IconButton><LinkedInIcon/></IconButton>
         </Box>
    </Box>

    {/* Right Side */}
      <Box sx={{display: 'flex',flexDirection:'column',  
        width:'70vw', margin:'0 2rem'}}>
        <Box sx={{display:'flex'}}>
          <Typography variant='h5' sx={{fontWeight:'bold', mr:'1rem'}} textAlign='center' color={nameColor} >Vladimir Stefanovic</Typography>
          <LocationOnIcon sx={{color: 'textSecondary'}} fontSize='small'/>
          <Typography variant='body2' textAlign='center' color='textSecondary'>Nis, Republika Srbija</Typography>
        </Box>
        <Typography color='primary.main' variant='body' mb={4}>Elektronski fakultet u Nisu/Profesor</Typography>
        <Typography variant='body2' color='textSecondary'>Sveobuhvatna Ocena</Typography>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <Typography variant='h5' color={nameColor}>4</Typography>
          <Rating sx={{color:'primary.main'}} name="read-only" value={2} readOnly />
        </Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'1rem'}} my={3}>
          <Button variant="text" sx={{color: nameColor}} startIcon={<ChatBubbleIcon />}>Message
          </Button>
          <Button variant="text" sx={{color: nameColor}} startIcon={<BookmarkIcon />}>Follow
            </Button>
          <Button variant="text" sx={{color: nameColor}} startIcon={<ReportIcon />}>Report
          </Button>
        </Box>
           <StyledToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              size='small'
              onChange={(event, newAlignment) => {
                setAlignment(newAlignment);
              }}
              // aria-label="Platform"
          >
          {tabs.map((tab)=>{
            return(
            <ToggleButton 
              key={tab.name} 
              variant="text" 
              sx={{color: 'text.secondary'}} 
              // startIcon={tab.icon} 
              value={tab.name}
              onClick={()=>{
                setSelectedPage(tab.page);
                      }}
           ><Box sx={{display:'flex', gap:1.5, alignItems:'center'}}>
              {tab.icon}{tab.name}
           </Box>
           </ToggleButton>)
          })}
          </StyledToggleButtonGroup>
        {selectedPage}
      </Box>
    </Box>
    </>
  )
}

export default AccountDetails;