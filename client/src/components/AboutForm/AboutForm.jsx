import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Box,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Button
} from '@mui/material';
const AboutForm = () => {
 const initialValues = {
        firstName: "",
        lastName: "",
        phone: 6,
        title: "",
        about: ""
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
 
    const [formValues, setFormValues] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
  return (
    <form onSubmit={handleSubmit}>
     {/* {formValues.map(value=>{
      console.log(value);
return (<TextField
          id='firstName'
          key={value}
          name="firstName"
          label="First name"
          type="text"
          value={value}
          onChange={handleInputChange}
        />)
     })} */}
     <Box sx={{display:'flex', gap:2}} my={2} >
     <TextField
          id='firstName'
          name="firstName"
          label="First name"
          type="text"
          value={formValues.firstName}
          onChange={handleInputChange}
     />
      <TextField
          id='lastName'
          name="lastName"
          label="Last name"
          type="text"
          value={formValues.lastName}
          onChange={handleInputChange}
     />
     </Box>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Student/Professor</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Student"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="female" control={<Radio />} label="Professor" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    <TextField
          id='phone'
          name="phone"
          label="Phone Number"
          type="Number"
          value={formValues.phone}
          onChange={handleInputChange}
     />
     <TextField
          id='about'
          name="about"
          label="About You"
          type="text"
          multiline
          maxRows={10}
          placeholder='Write something about you that will set you apart from others'
          value={formValues.about}
          onChange={handleInputChange}
     />
    </form>
  )
}

export default AboutForm