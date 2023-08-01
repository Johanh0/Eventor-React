import { Suspense } from 'react'
import { fetchData } from '../fetchData'
import Card from "./Card"

const apiData = fetchData(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&per_page=12&geoip=true`)

const Main = ({darkMode}) => {
    const data = apiData.read();
    console.log(data);
    console.log(data[0].performers[0].image)

  return (
    <section className={`p-16 max-w-[1500px] m-auto ${darkMode ? 'bg-primary-darkMode' : ''}`}>
        <div className='flex flex-wrap justify-center items-center'>
      <Suspense fallback={<div>loading...</div>}/>
        {data?.map(events => (
            <Card 
            key={events.id} 
            title={events.title} 
            img={events.performers[0].image} 
            address={`${events.venue.extended_address} ${events.venue.address}`}
            url={events.performers[0].url}
            darkMode={darkMode}
            />
        ))}
      <Suspense/>
        </div>
    </section>
  )
}

export default Main
