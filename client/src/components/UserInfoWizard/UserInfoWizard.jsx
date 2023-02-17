import { Fragment } from 'react';
import {useState} from 'react';
import {CssBaseline,
AppBar,
Box,
Container,
Toolbar,
Paper,
Stepper,
Step,
StepLabel,
Button,
Typography,
createTheme,
ThemeProvider} from '@mui/material';
import EducationDetails from './EducationDetails';
import PersonalInfo from './PersonalInfo';
import Review from './Review';
import { Copyright } from '..'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateUserInfo } from '../../api/store/auth';

const UserInfoWizard = () => {
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('profile')).result);
  const steps = ['Personal Informations', 'Education & Media details', 'Review your account'];

  const theme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo {...formData} handleChange={handleChange} handleImageUpload={handleImageUpload}/>;
    case 1:
      return <EducationDetails {...formData} handleChange={handleChange} />;
    case 2:
      return <Review {...formData} />;
    default:
      throw new Error('Unknown step');
  }
}

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

   const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const base64 = await convertToBase64(image);
    setFormData({...formData, photo: base64});
  }
  const convertToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) =>{
        reject(error);
      }
    })
  }

   const handleSubmit = (event) => {
        handleNext();
        event.preventDefault();
        setTimeout(()=>{
          dispatch(updateUserInfo(formData._id, formData, navigate));}, 3000)
    };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Student Platform
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Set your account
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for setting up your account!
              </Typography>
              <Typography variant="subtitle1">
                You will be now redirected to your dashboard.
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext }
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
export default UserInfoWizard;