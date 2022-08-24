import React from 'react';
import './PersonaCard.css'

const PersonaCard = ({name , image, occupation, verification}) => {
    return (
        <div className="card">
            <img src={image} alt="slika"/>
            <div className="card">
            <h1>
                <h4>{verification} ? <b>{name} ✅</b> : <b>{name}</b></h4>
            </h1>
            <p>{occupation}</p>
            </div>
        </div>
    )
}

export default PersonaCard