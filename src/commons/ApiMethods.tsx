import axios from "axios";
import { useEffect, useState } from "react";

function ApiMethods(url: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        setLoading(true);
        axios.get(url, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) });
    }, [url])

    const putMethod = (id: any, name: any, fact: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, { name: name ,fact: fact}, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) })

    }

    return { data, loading, error, putMethod }

}

export default ApiMethods;
