import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from '../assets/Slider.png'
// Import Swiper styles
import 'swiper/css';
import Stripes from '../components/Stripes';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Divider from '../components/Divider';
import Services from '../components/Services';



const Home = () => {
  return (
    <div>

      {/* Carousal */}
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className='h-[85vh]'><img src={Slider} alt="" className='h-full w-full' /></div></SwiperSlide>

        </Swiper>


      </div>

      {/* Stripes */}

      <Stripes alignment={`items-end`} />

      {/* About */}
      <About />

      {/* Gallery */}
      <Gallery />

      {/* Divider */}
      <Divider />

      {/* Services */}
      <Services />


      <Stripes alignment={`items-start`} />

      
    </div>
  )
}

export default Home
