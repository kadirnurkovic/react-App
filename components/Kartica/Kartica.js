import React from 'react'
import "./Kartica.css"

const Kartica = ({ name , image , occupation , side , number ,subtext}) => {

    return (
        <div className="card">

            <div className="main">
                <img src={image} alt="Slika"/>
                <div className="name-and-text">
                <h1>{name}</h1>
                <p className="sub">{subtext}</p>
                <p className="occ">{occupation}</p>
                </div>
            </div>
            <p className="side-text">{side} <p className="num">{number}</p></p>
        </div>
    )

}

export default Kartica;