import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Slider from '../assets/Group.png'

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import Stripes from "../components/Stripes";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Divider from "../components/Divider";
import Services from "../components/Services";
import VenueFilter from "../components/EventSection";

const Home = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={"true"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src="/slider.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="/slider.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="/slider.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="/slider.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/*image Slider */}
   

      {/* Stripes */}

      <Stripes alignment={`items-end`} />

      {/* About */}
      <About />

      {/* Gallery */}

      {/* Divider */}
      <Divider />

      {/* Services */}
      <Services />

      <VenueFilter />

      <Stripes alignment={`items-start`} />
    </div>
  );
};

export default Home;
