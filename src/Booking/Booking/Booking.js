import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();

  return (
    <div style={{ height: 400 }}>
      <h1>please booking{serviceId}</h1>
    </div>
  );
};

export default Booking;
