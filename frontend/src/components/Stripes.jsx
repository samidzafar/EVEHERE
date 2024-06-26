import React from 'react'

const Stripes = ({alignment}) => {
  return (
    <div className={`flex flex-col gap-2 justify-end ${alignment} py-6`}>
      <div className='bg-teal-custom h-3 w-11/12'></div>
      <div className='bg-teal-custom h-3 w-10/12'></div>
    </div>
  )
}

export default Stripes
