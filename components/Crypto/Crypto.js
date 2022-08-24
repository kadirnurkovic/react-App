import React from 'react'
import { useState } from 'react'
import './Crypto.css'

function Crypto({ name, value, deleteBtn}) {

    const [isShowMoreShowLess, setShowMoreShowLess] = useState(false)
    const Toggle = () => {
        setShowMoreShowLess((prevState) => !prevState)
    }
    return (
        <div className="Crypto">
            <p className='paragraf-1'>{name}</p>
            <p className='paragraf-2'>{value}</p>
            <button className="toggleButton" onClick={Toggle}>{isShowMoreShowLess ? "Show Less" : "Show More"}</button>
            <div className='read-more-read-less'>
                {isShowMoreShowLess ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' :  ''}
            </div>
            <button id="btn" onClick={deleteBtn}>X</button>
        </div>
    )
}

export default Crypto;