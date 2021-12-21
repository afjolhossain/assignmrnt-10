import React from "react";
import Carousel from "react-material-ui-carousel";
import bannerpic from "../../../images/carosel/corosol-2 (1).jpg";
import bannerpic2 from "../../../images/carosel/corosol-2 (2).jpg";
import bannerpic3 from "../../../images/carosel/corosol-2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <img style={{ width: "100%", height: 600 }} src={bannerpic} alt="" />
        <img style={{ width: "100%", height: 600 }} src={bannerpic2} alt="" />
        <img style={{ width: "100%", height: 600 }} src={bannerpic3} alt="" />
      </Carousel>
    </div>
  );
};

export default Banner;
