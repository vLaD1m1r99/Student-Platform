import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Avatar, Box, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteCourse, updateCourse } from '../../../../api/store/courses';
import { useState } from 'react';


const CourseCard = ({course, myCourse}) => {
  const dispatch = useDispatch();
  const [editCourse, setEditCourse] = useState(false);
  const [courseData, setCourseData] = useState({ courseName: course.courseName, courseFee:course.courseFee })
  const deleteMyCourse = () => {
    dispatch(deleteCourse(course._id));
  }
  const updateMyCourse = ()=>{
    // This is new course data
dispatch(updateCourse(course._id, {...courseData, hostName: course.hostName, hostId: course.hostId, createdAt: new Date().toISOString() }));
  }
  return (
  <Card sx={{display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    }}>
      <Box m={3}
      sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Avatar sx={{width: 56, height: 56}} alt={course.hostName[0]}>{course.hostName[0]}</Avatar>
        <Box sx={{
        display: 'flex', flexDirection:'column'
      }}>
        {!editCourse ?
        <Typography sx={{padding: '0 16px', fontWeight: 'bolder'}} variant="h5" component='h4'>{course.courseName.toUpperCase()}</Typography>
        :<TextField
        sx={{left:'1rem',top:'-1rem', input: { fontWeight: 'bolder'}}}
          color='secondary'
          autoFocus
          required
          fullWidth
          name="courseName"
          variant='standard'
          label="Course Name"
          value={courseData.courseName}
          onChange={(e)=> setCourseData({...courseData, courseName: e.target.value})}/>}
          {/* Tags */}
          <Box sx={{display: 'flex', justifyContent: 'start', alignItems:'center'}}>
            {
            course.courseTags.map((tag)=>{return(
            <Typography 
            sx={{padding: '0 1rem'}}
            variant='body2' color='textSecondary' key={tag}>#{tag}</Typography>)
          })}
          </Box>
        </Box>    
      <CardContent>
        {!editCourse ?
        <Typography sx={{margin: '0 auto', alignSelf: 'flexEnd', marginTop: '-1rem'}}variant="h5" color="secondary" component="h4">{`${course.courseFee},00 RSD`}</Typography>: 
        <TextField
        sx={{left:'1rem',top:'-1rem', input: {fontWeight: 'bolder'}}}
          color='secondary'
          id='standard-number'
          required
          fullWidth
          name="courseFee"
          type= "number"
          variant='standard'
          label="Course Fee"
          value={courseData.courseFee}
          onChange={(e)=> setCourseData({...courseData, courseFee: e.target.value})}
        />}
      </CardContent>
      {/* Edit button */}
      {myCourse &&
      <IconButton sx={{position: 'absolute', right: '1rem', top: '1rem' }} onClick={() =>{
        setEditCourse(!editCourse);
        }}>{!editCourse ? <MoreHorizIcon/> : <CloseIcon/>}</IconButton>}
      </Box>
    <Box sx={{
    marginLeft: '1.5rem',
    }}>
        <Typography sx={{fontWeight: 'bolder'}}variant="h6" >{course.hostName}</Typography>
        <Typography color='secondary' gutterBottom variant="body2">{moment(course.createdAt).fromNow()}</Typography>
      </Box>
      <div sx={{
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  }}>
        
      </div>
{/* Displaying buttons only for current user's courses */}
      {myCourse &&  <>
       <CardActions sx={{ padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'end',}}>
      {/* Changes from delete to save change */}
      {!editCourse ? <Button size="small" color="primary" onClick={deleteMyCourse}><DeleteIcon fontSize="small" /> Delete</Button>: <Button size="small" color="primary" onClick={updateMyCourse}><SaveIcon fontSize="small" />Save</Button>}
      </CardActions>
      </>}
     
    </Card>
  );
};

export default CourseCard;