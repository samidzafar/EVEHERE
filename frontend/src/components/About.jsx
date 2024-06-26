import React from 'react'
import img from '../assets/testimage.png'
const About = () => {
  return (
    <div className='flex items-center px-20'>
      <div className='w-1/2 p-10'>
        <img src={img} alt="" className='custom-shadow-teal w-10/12 ' />
      </div>

      <div className='w-1/2 px-10'>
        <h2 className='text-teal-custom text-7xl font-semibold py-4'>About Us</h2>
        <p className='text-xl '>
        <span clas>EVEHERE</span> is the one stop solution which thrives on creativity, flexibility, and attention to detail to tailor each event to the customer’s customisation by providing personalized packages.
        </p>
      </div>
    </div>
  )
}

export default About
