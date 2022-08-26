import React from 'react';
import './WeatherCard.css'
import { useState } from 'react'

export default function WeatherCard({ description }) {

    const [celsius, setCelsius] = useState(Math.floor(Math.random() * 60) - 20);
        function celsiusChange(){
        setCelsius(Math.floor(Math.random() * 60) - 20)
    }
    if(celsius > -10 && celsius < 33){
        description = 'Neutralno'
    }else if(celsius <= -10){
        description = 'Smrzavanje'
    }else if(celsius >= 33){
        description = 'Ne izlazite se suncu'
    }
    return (
        <div className='weather-card' style={{
            background: celsius > 23 ? 'rgba(220 ,20 ,60 )' : celsius > 4 ? 'rgb(255,215,0)' : 'rgb(70,130,180)'
        }}>
            <p className='degree'>{celsius}°</p>
            <button className='change-temp' onClick={celsiusChange}>Change temp</button>
            <p className='desc'>{description}
        </p>
        </div>

    )
}