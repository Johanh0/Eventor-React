import { Suspense } from 'react'
import { fetchData } from '../fetchData'
import Card from "./Card"

const apiData = fetchData(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&geoip=true`)

const Main = () => {
    const data = apiData.read();
    console.log(data);
    console.log(data[0].performers[0].image)

  return (
    <div className='p-16'>
        <div className='flex flex-wrap justify-center items-center'>
      <Suspense fallback={<div>loading...</div>}/>
        {data?.map(events => (
            <Card 
            key={events.id} 
            title={events.title} 
            img={events.performers[0].image} 
            address={`${events.venue.extended_address} ${events.venue.address}`}
            url={events.performers[0].url}
            />
        ))}
      <Suspense/>
        </div>
    </div>
  )
}

export default Main
