import {useState} from 'react'
import {Box, Avatar, Typography, Rating, Button, ToggleButtonGroup, ToggleButton, styled, IconButton} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReportIcon from '@mui/icons-material/Report';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
    {name: 'Active Courses', icon: <EventAvailableIcon/>, page: <Reviews/>},
    {name: 'Held Courses', icon: <FormatListBulletedIcon/>, page: <Reviews/>},
     {name: 'Attended Courses', icon: <LibraryAddCheckIcon/>, page: <Reviews/>}
    ]
    const [selectedPage, setSelectedPage] = useState(tabs[0].page);

     const [alignment, setAlignment] = useState(tabs[0].name);
  const user = JSON.parse(localStorage.getItem('profile'))?.result;
  return (<>
    <Box sx={{display: 'flex', mt:1}}>
      {/* Left Side */}
      <Box mr={5} sx={{display: 'flex',flexDirection:'column', width:300, margin: '0 2rem'}}>
        <Avatar alt={`${user.firstName} ${user.lastName}`}
        src={user.photo}
      sx={{ width: 300, height: 300, mb: 3 }} 
      >
        </Avatar>
        <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>About</Typography>
        <Typography variant='body' sx={{color: nameColor, fontStyle:'italic'}}>{user.about}</Typography>
         <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>Contact</Typography>
         <Box sx={{display:'flex', gap:4}}>
           <Typography sx={{color: nameColor}}>Email:</Typography>
           <Typography sx={{color: 'secondary.main'}}>{user.email}</Typography>
         </Box>
         <Box sx={{display:'flex', gap:3}}>
           <Typography sx={{color: nameColor}}>Phone:</Typography>
           <Typography sx={{color: 'secondary.main'}}>+381 {user.phone}</Typography>
         </Box>
         <Box sx={{display:'flex', gap:3, justifyContent:'center'}}>
            <IconButton href={user?.instagram} target='_blank'><InstagramIcon/></IconButton>
            <IconButton href={user?.facebook} target='_blank'><FacebookIcon/></IconButton>
            <IconButton href={user?.linkedIn} target='_blank'><LinkedInIcon/></IconButton>
         </Box>
    </Box>

    {/* Right Side */}
      <Box sx={{display: 'flex',flexDirection:'column',  
        width:'70vw', margin:'0 2rem'}}>
        <Box sx={{display:'flex'}}>
          <Typography variant='h5' sx={{fontWeight:'bold', mr:'1rem'}} textAlign='center' color={nameColor} >{user.firstName} {user.lastName}</Typography>
          <LocationOnIcon sx={{color: 'textSecondary'}} fontSize='small'/>
          <Typography variant='body2' textAlign='center' color='textSecondary'>{user.zip}{user.city}, Republika Srbija</Typography>
        </Box>
        <Typography color='primary.main' variant='body' mb={4}>{user.schoolName} / {user.schoolYear}</Typography>
        <Typography variant='body2' color='textSecondary'>Sveobuhvatna Ocena</Typography>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <Typography variant='h5' color={nameColor}>{user.rating}</Typography>
          <Rating sx={{color:'primary.main'}} name="read-only" value={user.rating/2} readOnly />
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
          >
          {tabs.map((tab)=>{
            return(
            <ToggleButton 
              key={tab.name} 
              variant="text" 
              sx={{color: 'text.secondary'}} 
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