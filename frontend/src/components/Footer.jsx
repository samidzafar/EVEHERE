import React from 'react';
import Logo from '../assets/LogoWhite.svg';
import Line from '../assets/Line.svg';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-teal-custom text-white pt-10 pb-4'>
      <div className=' mx-auto flex justify-between items-start'>
        <div className='flex items-center justify-around p-5 w-1/3'>
          <div className='mb-5 '>
            <h4 className='text-xl font-bold'>Support</h4>
            <img src={Line} className='my-2' alt="Line" />
            <ul className='space-y-2'>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className=''>
            <img src={Logo} alt="Logo" className='h-25' />
          </div>
        </div>

        <div className='flex flex-col w-1/3 items-center p-5 border-l border-r'>
          <h4 className='text-2xl font-bold text-center'>Our Socials</h4>
          <img src={Line} alt="Line" className='my-2 mx-auto scale-125' />
          <ul className='space-y-4'>
            <li className='text-xl'>
              <Link to="https://www.instagram.com/Evehere_official" className='flex items-center gap-2'>
                <FaInstagram /> @Evehere_official
              </Link>
            </li>
            <li className='text-xl'>
              <Link to="https://www.facebook.com/Evehere_official" className='flex items-center gap-2'>
                <FaFacebookSquare /> @Evehere_official
              </Link>
            </li>
            <li className='text-xl'>
              <Link to="https://www.linkedin.com/company/Evehere_official" className='flex items-center gap-2'>
                <FaLinkedin /> @Evehere_official
              </Link>
            </li>
            <li className='text-xl'>
              <Link to="https://twitter.com/Evehere_official" className='flex items-center gap-2'>
                <FaTwitter /> @Evehere_official
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-center p-5 w-1/3'>
          <h4 className='text-2xl font-bold text-center'>Contact Info</h4>
          <img src={Line} alt="Line" className='my-2 mx-auto scale-125' />
          <div className='space-y-4'>
            <div>
              <p>Anish S. Anand</p>
              <div className='flex items-center gap-2'>
                <FaPhone /> Phone: (+91) 9108329444
              </div>
            </div>
            <div>
              <p>Ayush Sarkar</p>
              <div className='flex items-center gap-2'>
                <FaPhone /> Phone: (+91) 9953974778
              </div>
            </div>
            <div>
              <p>Email:</p>
              <div className='flex items-center gap-2'>
                <IoIosMail /> evehere2024@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
