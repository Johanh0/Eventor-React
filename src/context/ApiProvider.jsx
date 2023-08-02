import { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData.events);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  return (
    <ApiContext.Provider value={{
      data,
      setData,
      loading,
      fetchData
    }}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider
