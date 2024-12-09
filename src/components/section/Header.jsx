import React from 'react'

const Header = ({data}) => {

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstname} 😎</span> </h1>
        <button className='bg-cyan-700 text-lg font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header