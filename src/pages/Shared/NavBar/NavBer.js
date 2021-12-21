import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../images/logo/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBer = () => {
  const { user, LogOut } = useAuth();
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "#263238" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <img style={{ width: "50%", marginTop: 8 }} src={logo} alt="" />
          </Typography>
          <Box>
            <NavLink
              to="/home"
              style={{
                marginRight: 10,
                textDecoration: "none",
              }}
            >
              <Button style={{ color: "#fafafa", fontSize: 15 }}>Home</Button>
            </NavLink>
            <Link
              to="/home#service"
              style={{ marginRight: 10, textDecoration: "none" }}
            >
              <Button
                color="inherit"
                style={{ color: "#fafafa", fontSize: 15 }}
              >
                Service
              </Button>
            </Link>
            <NavLink
              to="medicines"
              style={{ marginRight: 10, textDecoration: "none" }}
            >
              <Button
                color="inherit"
                style={{ color: "#fafafa", fontSize: 15 }}
              >
                Medicine
              </Button>
            </NavLink>
            <NavLink
              to="/owner"
              style={{ marginRight: 10, textDecoration: "none" }}
            >
              <Button
                color="inherit"
                style={{ color: "#fafafa", fontSize: 15 }}
              >
                Owner
              </Button>
            </NavLink>
            {user?.email ? (
              <Button onClick={LogOut} sx={{ color: "white" }} color="inherit">
                LogOut
              </Button>
            ) : (
              <NavLink
                to="/login"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                <Button
                  color="inherit"
                  style={{ color: "#fafafa", fontSize: 15 }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBer;
