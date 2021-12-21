import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Owner from "./Owner/Owner";

const Owners = () => {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setOwners(data.owner));
  }, []);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {owners.map((owner) => (
        <Owner key={owner.id} owner={owner}></Owner>
      ))}
    </Grid>
  );
};

export default Owners;
