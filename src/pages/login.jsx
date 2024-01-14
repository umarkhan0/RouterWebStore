import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
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
import Logo from '../images/logo.png';
import DrawerAppBar from '../components/header';
import { NavLink, useNavigate } from 'react-router-dom';
import userContext from '../context/userCotext';
import Footer from '../components/footer';
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

export default function Login() {
  const {name} = React.useContext(userContext);
  console.log(name);
  let [passwordError, setPasswordError] = useState("")
  let [emailError, setEmailError] = useState("")
const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    
      axios.post("http://localhost:3000/api/login", {
        email: data.get('email'),
        password: data.get('password'),
      }).then(response => {
        let {token} =  response.data;
        localStorage.setItem("Sign" , token);
        navigate("/")
      }).catch(error => {
        console.log(error);
        let { message } = error.response.data;
        if (message == '"email" is not allowed to be empty') {
          setEmailError("Email is not allowed to be empty");
         
        } else if (message == '"email" must be a valid email') {
          setEmailError("Enter your correct email address");
         
        } 
        else if (error.response.data.messge == "Cannot read properties of null (reading 'toObject')"){
          setEmailError("Email not found");
         
        }
        else {
          setEmailError("");
        };
        if (message == '"password" is not allowed to be empty') {
          setPasswordError("password not allowed to be empty");
        } else if (message == '"password" length must be at least 6 characters long') {
          setPasswordError("your password length must 6 characters long");
        }
        else if(error.response.data.user == "Rong Password"){
          setPasswordError("Rong password");
        }
        else {
          setPasswordError("");
        }
        console.log(error.response.data.messge);
      })
    








  };

  return (
    <>
    <DrawerAppBar/>
    <ThemeProvider theme={defaultTheme}>
   
      <Container component="main" maxWidth="xs" className=' sm:shadow-md p-3 my-8'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          
          }}
        >
                     <img src={Logo} className=' h-[60px]' />
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
             
              <Grid item xs={12}>
                <TextField
                sx={style}
               
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: {
                      borderColor: 'red !important', // Change this to the desired border color
                    }
                  }}
                />
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                 sx={style}
                  required
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
                  label="Remaimber me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: "#008080" ,
            
              "&:hover, &:active": {
                backgroundColor: "#008080", // Keep the same color on hover and click
              }
            }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <NavLink  to={"/signUp"} className=" hover:underline text-[14px]">
                  Not user? SignUp
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