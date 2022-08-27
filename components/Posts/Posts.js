import React from 'react'
import { useState , useEffect } from 'react'
import './Posts.css'
import Post from './Post'

export default function Posts() {

    const [post, setPost] = useState([]);

    const getPost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setPost((prev) => [ ...prev ,{id: json.id, title:json.title} ])
        })
    }

    useEffect(() => {
        getPost(1)
    }, [])

            return (
                <div className='posts-container'>
                <button className="btn-class" onClick={() => getPost(Math.floor(Math.random() * 90))}>CHANGE POST</button>
                <p>Posts List</p>
                <div className='post'>
                {post.map((el) => (
                <div key={el.id}>
                <Post 
                id={el.id}
                title={el.title}/>
                </div>
                ))}
            </div>
        </div>
   ) }