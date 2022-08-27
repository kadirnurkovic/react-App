import React from 'react'
import './Post.css'


export default function Post({ id , title , type }) {
    return (
    <div className='post'>
        <p>{id}</p>
        <p className='title-class'>{title}</p>
        <p>{type}</p>
    </div>
    )
}