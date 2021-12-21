import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, details } = service;
  return (
    <Grid item xs={4} sm={4} md={4} style={{ justifyContent: "center" }}>
      <Card sx={{ maxWidth: 360, marginLeft: "20" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Link
          style={{ textDecoration: "none", color: "#fafafa" }}
          to={`/booking/${id}`}
        >
          <Button
            style={{
              width: "50%",
              backgroundColor: "#212121",
              marginBottom: 5,
            }}
          >
            click
          </Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default Service;
