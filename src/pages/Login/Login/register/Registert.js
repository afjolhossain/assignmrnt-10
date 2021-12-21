import {
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Registert = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const hendleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: "#a1887f" }}>
      <Container item xs={12} md={8}>
        <Typography variant="h3" gutterBottom>
          Please Register
        </Typography>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#7986cb",
                borderRadius: 2,
              }}
              id="outlined-basic"
              name="name"
              type="name"
              onBlur={hendleOnBlur}
              label="Your Name"
              variant="outlined"
            />
            <br />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#7986cb",
                borderRadius: 2,
              }}
              id="outlined-basic"
              required
              name="email"
              type="email"
              onBlur={hendleOnBlur}
              label="Your Email"
              variant="outlined"
            />
            <br />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#7986cb",
                borderRadius: 2,
              }}
              id="outlined-basic"
              required
              label="Your Password"
              type="password"
              name="password"
              onBlur={hendleOnBlur}
              variant="outlined"
            />
            <br />
            <TextField
              sx={{
                width: "50%",
                m: 1,
                backgroundColor: "#7986cb",
                borderRadius: 2,
              }}
              id="outlined-basic"
              label="Re-Password"
              type="password"
              name="password2"
              onBlur={hendleOnBlur}
              variant="outlined"
            />
            <br />
            <Button
              sx={{ width: "50%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text" style={{ color: "black", fontSize: 20 }}>
                Already Register ?
                <span style={{ color: "#1a237e", marginLeft: 5 }}>
                  Please Please Login
                </span>
              </Button>
            </NavLink>
          </form>
        )}
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
            congrats, Registered Successfully!{" "}
          </Alert>
        )}
        {authError && (
          <Alert
            style={{
              width: "25%",
              backgroundColor: "#fafafa",
              marginLeft: 400,
            }}
            severity="error"
          >
            {authError}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Registert;
