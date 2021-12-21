import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

const Medicine = ({ medicine }) => {
  const { name, img, details } = medicine;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 365 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
      </Card>
    </Grid>
  );
};

export default Medicine;
