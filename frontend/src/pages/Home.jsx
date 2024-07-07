import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from '../assets/Slider.png'
// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay} from 'swiper/modules';


import Stripes from '../components/Stripes';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Divider from '../components/Divider';
import Services from '../components/Services';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <div>

      {/*image Slider */}
      <Slider/>

      {/* Stripes */}

      <Stripes alignment={`items-end`} />

      {/* About */}
      <About />

      {/* Gallery */}
     

      {/* Divider */}
      <Divider />

      {/* Services */}
      <Services/>
   
      <EventSection/>
   

      <Stripes alignment={`items-start`} />

      
    </div>
  )
}

export default Home
