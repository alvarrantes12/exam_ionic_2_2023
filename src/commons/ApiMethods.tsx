import axios from "axios";
import { useState } from "react";

function ApiMethods(url: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const putMethod = (id: any, name: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, { name: name }, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) })

    }

    return { data, loading, error }

}

export default ApiMethods;
