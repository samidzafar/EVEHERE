import React from 'react'

const Card = ({img,  children}) => {
  return (
    <div className={`w-[30vw] shadow-md shadow-black`}>
      <div><img src={img} alt="" /></div>
      {children}
    </div>
  )
}

export default Card