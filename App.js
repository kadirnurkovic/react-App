
import Greeting from './components/Greeting/Greeting';
import { useState } from 'react'
import React from 'react'
import CryptoList from './components/Crypto/CryptoList'
import "./App.css"


function App(){
  return (
   <div className='card-container'>
      <CryptoList />
   </div>
  )
};

export default App;
