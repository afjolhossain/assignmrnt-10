import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    loginUser,
    isLoading,
    authError,
    signInGoogle,
    signInFacebook,
  } = useAuth();
  const hendleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <div style={{ height: 500, backgroundColor: "#795548" }}>
      <Container item xs={4} sm={4} md={4}>
        <Typography variant="h3" gutterBottom>
          Please Login
        </Typography>
        <Grid>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#64b5f6",
                borderRadius: 2,
              }}
              id="outlined-basic"
              required
              name="email"
              onBlur={hendleOnChange}
              label="Your Email"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#64b5f6",
                borderRadius: 2,
              }}
              id="outlined-basic"
              required
              label="Your Password"
              type="password"
              name="password"
              onBlur={hendleOnChange}
              variant="outlined"
            />
            <Button
              sx={{ width: "50%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button style={{ color: "black", fontSize: 20 }} variant="text">
                new User?
                <span style={{ color: "#1a237e", marginLeft: 5 }}>
                  Please Register
                </span>
              </Button>
            </NavLink>
            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert
                style={{
                  width: "25%",
                  backgroundColor: "#0097a7",
                  marginLeft: 400,
                }}
                severity="success"
              >
                congrats, loged Successfully!
              </Alert>
            )}
            {authError && (
              <Alert
                style={{
                  width: "25%",
                  backgroundColor: "#0097a7",
                  marginLeft: 400,
                }}
                severity="error"
              >
                {authError}
              </Alert>
            )}
          </form>
          <div style={{ fontSize: 20 }}>
            -------------------OR---------------------
          </div>
          <div>
            <Button onClick={signInGoogle}>
              <GoogleIcon style={{ width: 80, height: 50, color: "#004d40" }} />
            </Button>
            <Button onClick={signInFacebook}>
              <FacebookIcon
                style={{ width: 80, height: 50, color: "#004d40" }}
              />
            </Button>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
