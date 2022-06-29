import React from 'react'

export default function Coin(props) {
    return (
        <>
            <div className="container my-4">
            <table class="table table-dark table-hover table-responsive{-sm|-md|-lg|-xl}">
                <thead className='table-active'>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">24h%</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Supply</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    props.data.map((item, index) =>{
                        return(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td><img src={item.image} alt="..." style={{height : "30px"}}/>&nbsp;&nbsp;&nbsp;{item.name}</td>
                                <td>{item.current_price} ₹</td>
                                <td>{item.market_cap_change_percentage_24h}%</td>
                                <td>{item.market_cap} ₹</td>
                                <td>{item.total_volume} ₹</td>
                                <td>{item.total_supply}</td>    
                            </tr>
                        )
                    })      
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

<table class="table table-hover">
  ...
</table>
