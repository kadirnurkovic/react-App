import React from 'react'
import "./App.css"
import WeatherCard from './components/Weather/WeatherCard'


function App(){
  return (
   <div className='card-container'>
      <WeatherCard description/>
   </div>
  )
};

export default App;
