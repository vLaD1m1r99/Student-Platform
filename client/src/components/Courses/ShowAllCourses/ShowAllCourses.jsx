import React from 'react'
import { useSelector } from 'react-redux';
import {ShowCourses} from '../..';

const ShowAllCourses = () => {
  const {courses} = useSelector((state)=>state.courses );
  return(
    <ShowCourses courses={courses} myCourses={false}/>
  )
};
export default ShowAllCourses