import React, { useState } from "react";
import DrawerAppBar from "../components/header";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Button } from "@mui/material";
import axios from "axios";
import CustomizedSnackbars from "../components/Snackbar";
import { base_URL, token } from "../constant/const";
import Footer from "../components/footer";
import userContext from "../context/userCotext";
import { Box, Grid, TextField } from "@mui/material";

function YourProfilePage() {
  const { profile } = React.useContext(userContext);
  let { name, email, profileImage } = profile.user;
  const [nameerror, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [oldpasswordError, setOldPasswordError] = useState("");
  const [newpasswordError, setNewPasswordError] = useState("");
  const [hendleOpen, setHendleOpen] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState(
    profileImage ||
      "https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg"
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const data = new FormData();

      data.append("name", formData.get("name"));
      data.append("newPassword", formData.get("newPassword"));
      data.append("oldpassword", formData.get("oldpassword"));
      data.append("image", file);

      const response = await axios.put(
        `${base_URL}/api/updateProfile/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response from server:", response.data);
      setNewPasswordError("");
      setOldPasswordError("");
      setNameError("");
      setHendleOpen(true);
    } catch (error) {
      error.response.data.message === "Old password does not match"
        ? setOldPasswordError("Old password does not match")
        : setOldPasswordError("");
      error.response.data.message === "At least 6 characters required"
        ? setNewPasswordError("At least 6 characters required")
        : setNewPasswordError("");
      error.response.data.message === "Name least 6 characters required"
        ? setNameError("At least 6 characters required")
        : setNameError("");
      console.log(error);
    }
  };

  const style = {
    "& label.Mui-focused": {
      color: "#001f3f",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#008080",
      },
    },
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        console.log(imageUrl);
      }
      setFile(e.target.files[0]);
    }
  };

  const handleSnackbarClose = () => {
    setHendleOpen(false);
  };

  return (
    <>
      <DrawerAppBar />
      <div className="flex justify-center items-center ">
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
              name="profileImage"
              id="get-img"
              accept="image/*"
              onChange={(e) => {
                handleImageChange(e);
              }}
            />
            <img
              src={image}
              alt=""
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
              }}
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
          <CustomizedSnackbars
            inform={{ openh: hendleOpen, title: "Profile Updated Successfully" }}
            onClose={handleSnackbarClose}
          />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={style}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  defaultValue={name}
                  id="name"
                  label="Your Name"
                  autoFocus
                />
                <p className="text-red-500 text-xs mt-1">{nameerror}</p>
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
                  type="password"
                  name="oldpassword"
                  autoComplete="oldpassword"
                />
                <p className="text-red-500 text-xs mt-1">{oldpasswordError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={style}
                  fullWidth
                  id="newPassword"
                  label="New Password"
                  name="newPassword"
                  type="password"
                  autoComplete="newPassword"
                />
                <p className="text-red-500 text-xs mt-1">{newpasswordError}</p>
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
                },
              }}
            >
              Edit
            </Button>
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default YourProfilePage;
