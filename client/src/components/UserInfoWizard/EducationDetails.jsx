import {Typography, Grid, TextField, InputAdornment} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const EducationDetails = ({schoolName,schoolYear, about, handleChange, facebook, linkedIn, instagram}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Why you?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School Name"
            fullWidth
            variant="standard"
            defaultValue={schoolName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="schoolYear"
            name="schoolYear"
            label="School Year"
            fullWidth
            variant="standard"
            defaultValue={schoolYear}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="facebook"
            label="Facebook Link"
            name='facebook'
            // helperText="Last three digits on signature strip"
            fullWidth
            variant="standard"
            defaultValue={facebook}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
            <InputAdornment position="start">
              <FacebookIcon />
            </InputAdornment>
          ),
        }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="instagram"
            name="instagram"
            label="Instagram Link"
            fullWidth
            variant="standard"
            defaultValue={instagram}
            onChange={handleChange}
            InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InstagramIcon />
            </InputAdornment>
          ),
        }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="linkedIn"
            name="linkedIn"
            label="LinkedIn Link"
            fullWidth
            variant="standard"
            defaultValue={linkedIn}
            onChange={handleChange}
            InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
          />
        <Grid item xs={12} md={6}>
          <TextField
            sx={{mt:1}}
            required
            id="about"
            name="about"
            label='About You'
            fullWidth          
            multiline = {true}
            maxRows={10}
            variant="standard"
            defaultValue={about}
            onChange={handleChange}
            inputProps={{maxLength:500}}
          />
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default EducationDetails;