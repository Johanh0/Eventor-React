import React from 'react'


const Card = ({title, img, address, url, darkMode}) => {

  return (
    <div>
        <div className={`relative flex w-80 flex-col m-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ${darkMode ? 'bg-secondary-darkMode text-white-color' : ''}`}>
            <img src={img} className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border  object-cover"/>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate">
                    {title}
                </h5>
                <p className='text-[10px] '>
                    {address}
                </p>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">

                </p>
            </div>
            <div className="p-6 pt-0">
                <a href={url} target="_blank" data-ripple-light="true" className={`select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${darkMode ? 'bg-soft-primary' : ''}`}>
                    Get Tickets
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card
