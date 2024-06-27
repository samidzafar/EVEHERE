import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
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
      <Gallery />

      {/* Divider */}
      <Divider />

      {/* Services */}
      <Services/>


      <Stripes alignment={`items-start`} />

      
    </div>
  )
}

export default Home
