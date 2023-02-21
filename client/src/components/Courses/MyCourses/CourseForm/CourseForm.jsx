import React, {useState, useRef} from 'react';
import { useDispatch} from 'react-redux';
import {Box, TextField, Button, Typography, IconButton, Autocomplete} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createCourse } from '../../../../api/store/courses';

const CourseForm = ({closeForm}) => {
// Tags part
const serbianFaculties = ['Elektronski fakultet','Masinski fakultet', 'Gradjevinski fakultet', 'Elektrotehnicki fakultet', 'Filozofski fakultet']

  const [courseData, setCourseData] = useState({ courseName: '', courseFee:'', courseTags:[] })
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createCourse({...courseData}));
    closeForm(!closeForm);
  }
  return(<Box sx={{position: 'relative'}}>
     <Typography sx={{fontWeight: 'bold', marginBottom: '1rem',}} variant='h4'>Create New Course</Typography>
     <IconButton sx={{position:'absolute', top:'-0.5rem' , right: '-0.5rem'}} onClick={()=>{
      closeForm(!closeForm);
     }}><CloseIcon fontSize='large'/></IconButton>
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { 
          m: 1,
          width: '60vw' 
      },
      }}
      noValidate
      autoComplete="off"
    >
      <Box 
      sx={{display: 'flex',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}
    >
        <TextField
          autoFocus
          required
          variant='standard'
          name="courseName"
          id="standard-required"
          label="Course Name"
          value={courseData.courseName}
          onChange={(e)=> setCourseData({...courseData, courseName: e.target.value})}
        />
        <TextField
          required
          variant='standard'
          name="courseFee"
          type= "number"
          id="standard-number"
          label="Course Fee"
          value={courseData.courseFee}
          onChange={(e)=> setCourseData({...courseData, courseFee: e.target.value})}
        />
        <Autocomplete
          required
          multiple
          limitTags={1}
          id="multiple-limit-tags"
          options={serbianFaculties}
          getOptionLabel={(option) => option}
          getOptionDisabled={(options) => courseData.courseTags.length > 3 ? true : false}
          onChange={(e)=> {
            setCourseData({...courseData, ...courseData.courseTags.push(e.target.innerHTML) });
          }
           }
          renderInput={(params) => (
            <TextField {...params} label="School Tags" variant = 'standard' placeholder="More" />
          )}
        />
        <Button
         sx={{width: '60vw', marginTop: '0.5rem'}}
            type='submit'
            variant='contained'
            onClick={handleSubmit}
            >
              Submit
          </Button>
        </Box>
        </Box>
        </Box>
      )
};

export default CourseForm;
