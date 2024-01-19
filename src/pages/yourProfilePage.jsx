import React, { useEffect, useState, useContext } from "react";
import DrawerAppBar from "../components/header";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import { base_URL } from "../constant/const";
import userContext from "../context/userCotext";
import { Box, Grid, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
function YourProfilePage() {
  const { profile } = React.useContext(userContext);
  console.log(profile.user.name);
  let { name, email } = profile.user
  const [nameerror, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      newPassword: data.get('newPassword'),
      oldPassword: data.get('oldpassword'),

    };
    console.log(formData);
    // axios.post(`${base_URL}/api/signup/`, formData)
    // .then((res) => {
    // setEmailError("");
    // localStorage.setItem("email" , formData.email);
    // navigate("/otp")

    // })
    //       .catch(error => {
    // // let {message} = error.response.data;
    //         let select = error.response?.data?.message?.split(' ')[0];
    //         select == '"name"' ? setNameError(error.response.data.message) : setNameError("")
    //         select == '"password"' ? setPasswordError(error.response.data.message) : setPasswordError("");
    //         if(error.response.data.message == "Email is already registered."){
    //           setEmailError("Already use Email");
    //         }else{
    //           setEmailError("")
    //         select == '"email"' ? setEmailError(error.response.data.message) : setEmailError("")
    //         }
    //       });
  }
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

  const [image, setImage] = useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }
  return (
    <>
      <DrawerAppBar />
      <div className=" flex justify-center items-center ">
        <div className="md:w-[40%] shadow-md p-3 my-4">
          <div
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <input
              style={{ display: "none" }}
              type="file"
              name=""
              id="get-img"
              onChange={handleImageChange}
            />

            <img
              src={image}
              alt=""
              style={{ width: "90px", height: "90px", borderRadius: "50%" }}
              className="absolute"
            />

            <label
              className="absolute mt-1"
              htmlFor="get-img"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <div>
                <CameraAltIcon />
              </div>
            </label>
          </div>
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
                  disabled={true}
                  defaultValue={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"

                />
                <p className="text-red-500 text-xs mt-1">{emailError}</p>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={style}

                  fullWidth


                  id="oldpassword"
                  label="Old Password"
                  name="oldpassword"
                  autoComplete="oldpassword"

                />
                <p className="text-red-500 text-xs mt-1">{emailError}</p>

              </Grid>  <Grid item xs={12}>
                <TextField
                  sx={style}

                  fullWidth


                  id="newPassword"
                  label="New Password"
                  name="newPassword"
                  autoComplete="newPassword"

                />
                <p className="text-red-500 text-xs mt-1">{emailError}</p>

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
              Edit
            </Button>

          </Box>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default YourProfilePage;
