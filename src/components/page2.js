import React, { useState } from "react";

//State

function Cart()
{
    let [Qty,setQty]=useState(0);
    let buy=() => 
    {
        setQty(Qty +1);
    }
    let cancel=() => 
    {
        setQty(Qty -1);
    }

  

    return (
    <div>
        <center>
        <h1>Buy React Tools</h1>
        <h3>Quantity: {Qty}</h3>
        <button className="btn btn-success" onClick={buy}>+</button> &nbsp;
        <button className="btn btn-primary" >Buy now</button> &nbsp;
        <button className="btn btn-danger" onClick={cancel}>-</button>
        
        </center>
    </div>
    )
   
}

export default Cart;