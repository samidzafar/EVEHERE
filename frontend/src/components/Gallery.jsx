import React from "react";
import img from "../assets/Group.png";
const Gallery = () => {
  return (
    <div className="flex items-center px-20">
      <div className="w-1/2 px-10">
        <h2 className="text-teal-custom text-7xl font-semibold py-4">
          Gallery
        </h2>
        <p className="text-xl ">
          <span clas>Gallery</span>What types of events do you specialize
          in?Weddings, birthday parties, get togethers, anniversaries,
          valentines day
        </p>
      </div>

      <div className="w-1/2 p-10">
        <img src={img} alt="" className="  " />
      </div>
    </div>
  );
};

export default Gallery;
