import { useEffect, useState } from "react";

export function useFetch(url, options={}) {
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url, {...options,
        headers: {
            'Accept': 'application/json; charset=UTF-8' ,
            ...options.headers
        }
    }).then(result => result.json()).then(data => {
        setData(data)
    })
    }, [])

    return (
        {loading, errors, data}
    )
}