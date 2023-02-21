import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {IconButton, Typography} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {ShowCourses, CourseForm} from '../..';

const MyCourses = () => {
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const [openForm, setOpenForm] = useState(false);
  
  const {courses, isLoading} = useSelector(state => state.courses);
  //Filtrira samo moje kurseve
  const myCourses = courses.filter((course)=> course.host._id === user._id);
  return(<>
  {/* If form should be active */}
   {!openForm ? (<>
   {/* If there are no courses */}
   {!myCourses.length && !isLoading ? <Typography variant='h5' color='error'>You have no courses. Please make one!</Typography> : <ShowCourses courses={myCourses} myCourses={true}></ShowCourses>}
    
  <IconButton sx={{ fontSize: '5rem', position: 'fixed', right:'1rem', bottom: '2rem'}} size='large' variant='contained' color='primary'  onClick={()=>{
   setOpenForm(true);
  }
   }>
     <AddCircleIcon fontSize='inherit' sx={{opacity: '1'}}/>
    </IconButton>
    </>
    )
         : (
          <CourseForm closeForm={setOpenForm}/>
        )}
        </>
    )
    
} 
    export default MyCourses;