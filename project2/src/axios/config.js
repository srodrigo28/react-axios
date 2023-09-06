import axios from "axios";

const api = `https://jsonplaceholder.typicode.com`;

const blogFetch = axios.create({
    baseURL: api,
    headers: {
        "Content-Type": "application/json"
    },
})

export default blogFetch;