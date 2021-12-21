import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Medicine from "./Medicine";

const Medicines = () => {
  const [medicines, setMedicibes] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setMedicibes(data.medicine));
  }, []);
  return (
    <div style={{ marginTop: 50 }} id="medicines">
      <h1 style={{ marginBottom: 50 }}>Medicines we Offer</h1>
      <Grid
        container
        style={{ margin: "auto", marginLeft: 15 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {medicines.map((medicine) => (
          <Medicine key={medicine.id} medicine={medicine}></Medicine>
        ))}
      </Grid>
    </div>
  );
};

export default Medicines;
