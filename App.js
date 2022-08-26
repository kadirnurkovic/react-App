import React from 'react'
import "./App.css"
import { useState, useEffect } from 'react'

function App(){

  const [number, setNumber] = useState(0);
  const [user, setUser] = useState ({})

  const getUser = (id) => {
      fetch(`https://jsonplaceholder.typecode.com/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setUser(json)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  const myFunc = () => {
    console.log("Moja funkcija u useEffect")
  }

    return (
      <div className='card-container'>
        <strong onClick={() => setNumber(Math.random())}>
          Ovo se nalazi u APP JS
          <hr/>
          {number}
        </strong>
        {user.title}
        <button onClick={() => getUser(10)}>Change name</button>
      </div>
    )
};

export default App;
