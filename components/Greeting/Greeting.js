import React from 'react';


const Greeting = (handleParentClick) => {
    const sayWelcome = (name) => {
        alert(`Welcome ${name}`)
    }
    return (
        <div>
            <h3 onClick={handleParentClick} style={{fontSize:"40px"}}>Hello Kadir</h3>
        </div>
    )
}

export default Greeting;