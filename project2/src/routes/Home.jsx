import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

// https://jsonplaceholder.typicode.com/posts
export function Home() {

    const [post, setPost] = useState([])
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const getPosts = async () => {
        // console.log("testando");
        try {
            const response = await axios.get(url);
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getPosts();
    },[])

    return(
        <div>Home</div>
    )
}