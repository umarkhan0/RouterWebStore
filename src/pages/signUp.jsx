import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import DrawerAppBar from '../components/header';
import Button from '@mui/material/Button';
import Footer from '../components/footer';
import { base_URL } from '../constant/const';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Logo from "../images/logo.png";
import axios from 'axios';

const style = {
  "& label.Mui-focused": {
    color: "#001f3f"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#008080"
    }
  }
}

const defaultTheme = createTheme();
export default function SignUp() {
const navigate = useNavigate()
  const [nameerror, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
console.log(formData.email);
    axios.post(`${base_URL}/api/signup/`, formData)
      .then((res) => {
        setEmailError("");
        localStorage.setItem("email" , formData.email);
        navigate("/otp")
        
      })
      .catch(error => {
let {message} = error.response.data;
        let select = error.response?.data?.message?.split(' ')[0];
        select == '"name"' ? setNameError(error.response.data.message) : setNameError("")
        select == '"password"' ? setPasswordError(error.response.data.message) : setPasswordError("");
        if(error.response.data.message == "Email is already registered."){
          setEmailError("Already use Email");
        }else{
          setEmailError("")
        select == '"email"' ? setEmailError(error.response.data.message) : setEmailError("")
        }
      });
  }


  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
    <DrawerAppBar />
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{marginY : "18px"}} component="main" maxWidth="xs" className=' shadow-md p-3'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Logo} className=' h-[60px]' />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={style}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                />
                  <p className="text-red-500 text-xs mt-1">{nameerror}</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="relative">
                  <TextField
                    sx={style}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={style}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                 
                />
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={style}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                 
                />
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#008080",
                "&:hover, &:active": {
                  backgroundColor: "#008080",
                }
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to={"/login"} className=" hover:underline text-[13px]">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <Footer />
    </>
  );
}
