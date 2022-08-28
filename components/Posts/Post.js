import React from 'react'
import './Post.css'


export default function Post({ title , description }) {
    return (
    <div className='post'>
        <p className='title-class'>{title}</p>
        <p>{description}</p>
    </div>
    )
}