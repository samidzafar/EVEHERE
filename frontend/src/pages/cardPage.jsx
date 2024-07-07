import React from "react";

const CardPage = ({ img, children }) => {
  return (
    <main>
      <div className="flex space-x-4 justify-center mt-16 mb-16">
        <div className="gap-8 mt-12">
        <img src="/images/event-img.svg" className="w-52 h-52" />
          <div className="grid grid-cols-3 gap-2">
            <img src="/images/event-img.svg" className="w-24 h-24" />
            <img src="/images/event-img.svg" className="w-24 h-24" />
            <img src="/images/event-img.svg" className="w-24 h-24" />
            <img src="/images/event-img.svg" className="w-24 h-24" />
            <img src="/images/event-img.svg" className="w-24 h-24" />
            <img src="/images/event-img.svg" className="w-24 h-24" />
           
          </div>
        </div>

        <div className=" space-y-2 border border-gray-300 w-[33rem] p-4 rounded-2xl">
          <div className="mb-8 space-y-3">
            <div className="flex space-x-3">
              <p className="text-teal-custom text-[12px]">Category:</p>
              <p className="text-[12px]">Birthday</p>
            </div>

            <h1 className="text-[1.5rem] font-bold">
            Royal Palace Hall
            </h1>

            <div className="flex space-x-4">
              <p className="text-gray-400">Cost Per Day</p>
              <p>150000</p>
            </div>
         

            <hr />

            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority our have suffered alteration in some form, by
              injected humour, or randomised words which don't kia look even
              slightly believable. If you are going to use
            </p>
            <hr />
          </div>
          <div className="space-y-4 ">
            <div className="flex space-x-12 ">
              <div className="flex space-x-5">
              <p className="font-bold text-[1rem]">AREA </p>
              <p>5000 Sq.ft</p>
              </div>
             
              <button className="h-[2rem] w-[6rem] text-white bg-teal-custom rounded-2xl">
               Join Now
              </button>
              <button className="h-[2rem] w-[6rem] p-1 text-sm bg-teal-custom text-white rounded-2xl">
                Contact-us
              </button>
            </div>

            <p className="text-[1rem]">Addition service - Decoration, Security, Valet Parking</p>
           


            <div className="flex space-x-12 items-center">
              <p className="text-[1.5rem]">Others </p>
              <p className="text-[12px] text-gray-500 mt-1">
              Sunshine Venue, Elite Banquet, Cozy Corner Hall
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardPage;
