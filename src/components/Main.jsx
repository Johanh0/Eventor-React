import { useContext, useEffect } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { ApiContext } from '../context/ApiProvider';
import Card from "./Card"
import Loading from './common/Loading';

const Main = () => {

  const { darkMode } = useContext(DarkModeContext);
  const { data, loading, fetchData } = useContext(ApiContext);
  

  useEffect(() => {
    fetchData(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&per_page=12&geoip=true`);
  }, [])

  return (
    <section className={`p-16 m-auto h-fit ${darkMode ? 'bg-primary-darkMode' : ''}`}>
      <div className='flex flex-wrap items-center justify-center w-full h-fit'>
      {
        loading ? (
          <Loading/>
        ) : (
          data?.map(events => (
            <Card
            key={events.id}
            title={events.title}
            img={events.performers[0].image}
            address={`${events.venue.extended_address} ${events.venue.address}`}
            url={events.performers[0].url}/>
          ))
        )
      }
      </div>
    </section>
  )
}

export default Main
