import {Typography, TextField, Grid, Avatar} from '@mui/material';

const PersonalInfo = ({firstName, lastName, phone, address, city, zip, photo, handleChange, handleImageUpload}) => {
    // Add dateofbirth, picture
  return (
   <>
      <Typography variant="h6" gutterBottom>
        Who are you?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} sx={{ display:'flex',alignItems:'center', justifyContent: 'center'}}>
        <label htmlFor='photo' style={{borderRadius:'50%' }}>
            {photo ?  <Avatar alt={`${firstName} ${lastName}`} src={photo} sx={{width:256, height:256}}/> : <Avatar sx={{width:200, height:200, htmlFor: 'photo'}}>
              {`${firstName} ${lastName}`}</Avatar>}
              </label>
          <input
            hidden
            type='file'
            required
            id="photo"
            name="photo"
            label="Profile Image"
            accept='image/*'
            autoComplete="picture"
            onChange={(e)=>handleImageUpload(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            type='number'
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
            defaultValue={phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
            defaultValue={address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            type='number'
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={zip}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
      </>
  );
}
export default PersonalInfo;