import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../../images/logo/logo.jpg";
const Footer = () => {
  return (
    <div
      style={{
        height: 250,
        width: "100%",
        backgroundColor: "black",
        display: "flex",
      }}
      item
      xs={4}
      sm={4}
      md={4}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        sx={{ color: "white" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <img style={{ marginTop: 20, marginRight: 120 }} src={logo} alt="" />

        <Typography style={{ marginTop: 80, color: "navy" }}>
          Copyright © 2021 Developer Afjol ahmed
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
        style={{ padding: 20 }}
      >
        <div style={{ marginLeft: 100, textAlign: "left", lineHeight: 12 }}>
          <Typography> Get help</Typography>
          <Typography> Read Our Blog</Typography>
          <Typography> Sign Up To Access Services</Typography>
          <Typography> Add Your Feedback</Typography>
        </div>
        <div style={{ marginRight: 80, textAlign: "left" }}>
          <Typography> About online Services</Typography>
          <Typography> Read FAQs</Typography>
          <Typography>View all Cities</Typography>
          <Typography> Clinic Near Me</Typography>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;
