import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (



        <div className='flex justify-between items-center px-2'>
            <div className='w-16 p-2'>
                <img src={Logo} alt="" />
            </div>

            <nav >
                <ul className='flex gap-8 text-lg items-center text-gray-800 '>
                    <li className='font-semibold '><Link>Home</Link></li>
                    <li className='font-semibold '><Link>About</Link></li>
                    <li className='font-semibold '><Link>Event</Link></li>
                    <li className='font-semibold '><Link>Contact</Link></li>

                    <li className='bg-teal-custom text-white py-1 text-base px-4 rounded-xl'><Link><button>Sign Up</button></Link></li>
                </ul>
            </nav>
        </div>


    )
}

export default Navbar
