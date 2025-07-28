import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data.allTasks);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 300);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default UseFetch;