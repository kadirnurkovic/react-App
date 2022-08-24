import React from 'react';
import { useState } from 'react';
import "./CryptoList.css"
import Crypto from "./Crypto"

const listOfData = [
    { id: 0, name: 'Bitcoin', value: 21600 },
    { id: 1, name: 'Ethereum', value: 1600 },
    { id: 2, name: 'Dogecoin', value: 0.069 },
    { id: 3, name: 'Tether', value: 1 },
    { id: 4, name: 'Binance coin', value: 279 },
];

function CardCrypto() {
const [crypto, setCrypto] = useState(listOfData);
const [userData, setUserData] = useState({
    name: "",
    value: "",
});

const AddCr = (e) => {
    e.preventDefault();
    setCrypto((prev) => [ 
     ...prev,
     {
        name: userData.name,
        value: userData.value,
        id: Math.random(),
     },]) 
     };


const onDeleteBtn = (id) => {
    const newCrypto = crypto.filter((value) => value.id !== id );
    setCrypto(newCrypto)
}

    return (
        <div className='cryptolist'>
           <form className="form-class">
            <label htmlFor="CryptoName">Crypto name</label>
            <input type="text" defaultValue={userData.name} onChange={(event) => setUserData((prev) => ({...prev, name: event.target.value}))}></input>
            <label htmlFor="CryptoValue">Crypto value</label>
            <input type="number" value={userData.value} onChange={(event) => setUserData((prev) => ({...prev, value: event.target.value}))}></input>
            <button type="submit" className='AddBtn' onClick={AddCr}>Add crypto valute</button>
           </form>
           {crypto.map((el) => (
            <div key={el.id}>
            <Crypto 
            name={el.name}
            value={el.value}
            deleteBtn={() => onDeleteBtn(el.id)}
            />
           </div>))}
        </div>
    )
}
;

export default CardCrypto;