// import React, { useState } from 'react';
// import images from '../images.json';
// import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToPrevious = () => {
//         const newIndex = (currentIndex - 1 + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     const goToNext = () => {
//         const newIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     return (
//         <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
//             {/* images */}
//             <div className='w-full h-full rounded-2xl overflow-hidden'>
//                 <img
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     className='w-full h-full object-cover duration-500'
//                 />
//             </div>
//             {/* right arrow */}
//             <div className='hidden group-hover:block absolute top-[50%] right-5 transform -translate-y-[50%] text-2xl text-white cursor-pointer'>
//                 <button onClick={goToNext}>
//                     <FaArrowCircleRight size={30} />
//                 </button>
//             </div>
//             {/* left arrow */}
//             <div className='hidden group-hover:block absolute top-[50%] left-5 transform -translate-y-[50%] text-2xl text-white cursor-pointer'>
//                 <button onClick={goToPrevious}>
//                     <FaArrowCircleLeft size={30} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Slider;
