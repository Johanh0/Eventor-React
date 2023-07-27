import { useState, useEffect} from 'react'


export function useFetch(url) {
    const abortController = new AbortController();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch(url, {signal: abortController.signal})
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        
        return () => abortController.abort();
    }, [])

    return { data, loading, error };
}