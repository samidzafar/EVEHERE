import React from 'react'
import Card from './cards/Card'
import img from '../assets/Slider.png'


const Services = () => {
    return (
        <div>
            <h1 className='text-center text-7xl text-teal-custom font-semibold'>Our Services</h1>
            <div className='flex flex-wrap gap-4 justify-around p-10'>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
                <Card img={img}>
                    <h2 className='text-center font-semibold text-xl py-2'>Birthday Event</h2>
                </Card>
            </div>

        </div>
    )
}

export default Services
