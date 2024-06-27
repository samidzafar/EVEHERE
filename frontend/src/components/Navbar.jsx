import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

    console.log("current user", user);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className='flex justify-between items-center px-2'>
            <div className='w-16 p-2'>
                <img src={Logo} alt="Logo" />
            </div>

            <nav>
                <ul className='flex gap-8 text-lg items-center text-gray-800'>
                    <li className='font-semibold'><Link to="/">Home</Link></li>
                    <li className='font-semibold'><Link to="/about">About</Link></li>
                    <li className='font-semibold'><Link to="/event">Event</Link></li>
                    <li className='font-semibold'><Link to="/contact">Contact</Link></li>
                    <li className='bg-teal-custom text-white py-1 text-base px-4 rounded-xl'>
                        {isAuthenticated ? (
                            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                        ) : (
                            <button onClick={() => loginWithRedirect()}>Sign Up</button>
                        )}
                    </li>
                </ul>
            </nav>

            {isAuthenticated && user && (
                <div className='flex items-center gap-4 ml-4'>
                    <img src={user.picture} alt={user.name} className='w-10 h-10 rounded-full' />
                    <div>
                        <h2 className='text-gray-800'>{user.name}</h2>
                        <p className='text-gray-600'>{user.email}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
