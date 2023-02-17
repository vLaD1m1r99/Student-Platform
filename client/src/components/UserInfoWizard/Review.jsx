import {Box, Avatar, Typography, IconButton} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Make left side separated jsx so it can be reused
export default function Review({firstName, lastName, email, phone, about, zip, city, schoolName, schoolYear, photo, facebook, instagram, linkedIn}) {
  const nameColor = '#414141'
  return (<Box sx={{display: 'flex', mt:1}}>
      {/* Left Side */}
      <Box mr={5} sx={{display: 'flex',flexDirection:'column', width:150, margin: '0 2rem'}}>
        <Avatar alt={`${firstName} ${lastName}`}
      src={photo}
      sx={{ width: 150, height: 150, mb: 1 }} 
      >
        </Avatar>
        <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>About</Typography>
        <Typography variant='body2' sx={{color: nameColor, fontStyle:'italic'}}>{about}</Typography>
       
    </Box>
     {/* Right Side */}
      <Box sx={{display: 'flex',flexDirection:'column',  
        width:'70vw', margin:'0 2rem'}}>
        <Box sx={{display:'flex'}}>
          <Typography variant='h6' sx={{fontWeight:'bold', mr:'1rem'}} textAlign='center' color={nameColor} >{firstName} {lastName}</Typography>
          <LocationOnIcon sx={{color: 'textSecondary'}} fontSize='small'/>
          <Typography variant='body2' color='textSecondary'>{zip} {city}, Republika Srbija</Typography>
        </Box>
        <Typography color='primary.main' variant='body2' mb={4}>{schoolName} / {schoolYear}</Typography>
          <Typography sx={{borderBottom: `1px solid`, borderBottomColor:'primary.main', py:1}} color='text.secondary' variant='body2' paragraph={true}>Contact</Typography>
         <Box sx={{display:'flex', gap:1}}>
           <Typography variant='body2' sx={{color: nameColor}}>Email:</Typography>
           <Typography variant='body2' sx={{color: 'secondary.main'}}>{email}</Typography>
         </Box>
         <Box sx={{display:'flex', gap:1}}>
           <Typography variant='body2' sx={{color: nameColor}}>Phone:</Typography>
           <Typography variant='body2' sx={{color: 'secondary.main'}}>+381 {phone}</Typography>
         </Box>
         <Box sx={{display:'flex', gap:1}}>
            <IconButton href={instagram} target='_blank'><InstagramIcon/></IconButton>
            <IconButton href={facebook} target='_blank'><FacebookIcon/></IconButton>
            <IconButton href={linkedIn} target='_blank'><LinkedInIcon/></IconButton>
         </Box>
        </Box>
    </Box>

  );
}