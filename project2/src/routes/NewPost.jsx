import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './NewPost.css';
import blogFetch from "../axios/config";


const NewPost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = async (e) => {
        e.preventDefault(); 

        const post = { title, body, userId: 1 };

        // console.log('Dados: ', post);

        await blogFetch.post("/posts", {
            body: post,
        });

        navigate("/");
    }

    return (
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form onSubmit={ (e) => createPost(e) }>
                <div className="form-control">
                    <label htmlFor="title">Título</label>
                    <input
                        id="title"
                        type="text"
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="digite um titulo"
                    />
                    <label htmlFor="body">Conteúdo</label>
                    <textarea
                        id="body"
                        cols="30"
                        rows="10"
                        onChange={ (e) => setBody(e.target.value) }
                    ></textarea>
                </div>
                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    )
};

export default NewPost;