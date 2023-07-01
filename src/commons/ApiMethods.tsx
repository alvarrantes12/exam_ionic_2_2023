import axios from "axios";
import { useEffect, useState } from "react";

function ApiMethods(url: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        const config = {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        };
    
        setLoading(true);
        axios
          .get(url, config)
          .then((response) => setData(response.data))
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      };
      
  const postMethod = (name: any, fact: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    };

    setLoading(true);
    axios
      .post(url, { name: name, fact: fact }, config)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
    const putMethod = (id: any, fact: any) => {
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

    return { data, loading, error, fetchData, postMethod };

}

export default ApiMethods;
