import React from 'react'
import {Grid, LinearProgress} from '@mui/material'
import {CourseCard} from '../..';
import { useSelector } from 'react-redux';
//Dodaj jos kao prop dugmice za promenu i tako to sto treba sve
const ShowCourses = ({courses, myCourses}) => {
  const isLoading = useSelector((state)=>state.isLoading);
  return (
    isLoading ? <LinearProgress color='secondary' /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {courses.map((course) => (
          <Grid key={course._id} item xs={12} sm={6} md={6}>
            <CourseCard course={course} myCourse={myCourses}/>
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default ShowCourses