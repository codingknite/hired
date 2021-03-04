import { useEffect, useRef, useState } from 'react'

export default function useFetch(url) {
    const isMounted = useRef(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        isMounted.current = true;
        async function fetchData() {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const data = await response.json();
                    if (isMounted.current) setData(data.data);
                } else {
                    throw response;
                }
            } catch (error) {
                console.error("There Was An Error => ", error);
                if (isMounted.current) setError(error);
            } finally {
                if (isMounted.current) setLoading(false);
            }
        }
        fetchData();
        window.scrollTo(0, 0);

        return () => {
            isMounted.current = false;
        };
    }, [url]);

    return { data, error, loading }
}