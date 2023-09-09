import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import blogFetch from "../axios/config";

import './Home.css';

// https://jsonplaceholder.typicode.com/posts
export function Home() {

    const [posts, setPost] = useState([])
    const getPosts = async () => {
        // console.log("testando");
        try {
            const response = await blogFetch.get("/posts")
            
            const data = response.data;
            // console.log(data);
            setPost(data);

        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getPosts();
    },[])

    return(
        <div className="home">
            <div>Home</div>
            {posts.length === 0 ? (<p>Carregando...</p>) : ( posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn" > Ler mais </Link>
                    </div>
                ))
            )}
        </div>
    )
}