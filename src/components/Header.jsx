import React from 'react'

const Header = () => {
  return (
    <div className='font-bold'>
        <p className='text-sm text-center'>Events on {''}
            <span className='text-primary-color'>North Carolina</span>
        </p>
      <h1 className='text-4xl mt-2 mb-10'>Find The Best {''}
        <span className='text-primary-color'>Events</span> {''}
        In Your State
      </h1>
    </div>
  )
}

export default Header
