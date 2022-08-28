import React from 'react'
import { useState , useEffect } from 'react'
import './Posts.css'
import Post from './Post'

export default function Posts() {

    const [post, setPost] = useState([]);

    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setPost(json)
        })
    }

    useEffect(() => {
        getPost()
    }, [])

            return (
                <div className='posts-container'>
                {/* <button className="btn-class" onClick={() => getPost(Math.floor(Math.random() * 90))}>CHANGE POST</button> */}
                <p>Posts List</p>
                <div className='post-in'>
                {post.map((el) => (
                <div key={el.id}>
                <Post 
                title={el.title}
                description={el.body}/>
                </div>
                ))}
            </div>
        </div>
   ) }