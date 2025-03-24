import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/Slider.css";
import BestSeller from "../components/BestSeller";

function Home() {
  return (
    <div className="home">
      <Carousel
        ariaLabel={"arial-label"}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
      >
        <div>
          <img src="https://www.lezzat.co.uk/wp-content/uploads/2021/03/Amazon-Product-Photography-Agency-UK-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://www.lezzat.co.uk/wp-content/uploads/2021/03/Amazon-Product-Photography-Agency-UK-1.jpg" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
      <BestSeller />
    </div>
  );
}

export default Home;
