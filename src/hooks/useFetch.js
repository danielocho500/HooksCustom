import React,{useState,useEffect, useRef} from 'react';

export const useFetch = (url) => {
    const [state, setstate] = useState({data: null, loading: true, error: null})
    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => {
            isMounted.current = true;
        }
    }, [])

    const getFetch = () => {
        setstate({data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if(isMounted.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
            });
    };

    useEffect(() => {
        getFetch();
    }, [url])

    const getRandom = () => {
        getFetch();
    }

    return [state,getRandom];
}
