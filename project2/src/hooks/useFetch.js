import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    // Configura o hooks
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }
    };

    // Lista Produtos
    useEffect(() => {
        // 6 - loading
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)

            } catch (error) {
                console.log(error.messagem);
                setError("Houve algum erro ao carregar os dados! Suporte 62 98592 1140")
            }
            
            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    // post novo
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
    
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};

