import React from 'react'
import Nav from './Nav'

const Header = ({darkMode}) => {
  return (
    <section className='font-bold'>
      <div>
        <h1 className={`text-center text-4xl mt-2 mb-10 ${darkMode ? 'text-secondary-color' : ''}`}>Find The {''}
        <span className={darkMode ? 'text-white-color' : 'text-primary-color'}>Best Events In</span> {''}
        Your State
        </h1>
      </div>
    </section>
  )
}

export default Header
