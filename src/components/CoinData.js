import React , { useEffect, useState } from 'react'
import Coin from  './Coin';

export default function CoinData() {
    const [ coinData, setCoinData ] = useState([]);
    const [ search , setSearch ] = useState('');
    
    useEffect(() =>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setCoinData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
        console.log(search);
    }

    const filterCoin = coinData.filter((coin) =>{
        console.log(coin);
        return(
        coin.name.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
    <>
        <div className="search">
            <h1>Cryptocurrency Tracker</h1>
            <input type="text" placeholder='Search' onChange={handleChange}/>
        </div>
        <Coin data ={filterCoin}/>
    </>
    )
}
