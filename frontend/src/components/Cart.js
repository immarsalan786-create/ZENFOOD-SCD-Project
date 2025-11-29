
import React from 'react';
export default function Cart({cart,onPlace}){
  const total = cart.reduce((s,i)=> s + i.price*i.qty, 0);
  return (
    <div style={{border:'1px solid #ddd', padding:10}}>
      <h3>Cart</h3>
      {cart.length===0 ? <div>No items</div> : cart.map(i=> <div key={i.id}>{i.qty} × {i.name} = ${(i.qty*i.price).toFixed(2)}</div>)}
      <hr/>
      <div>Total: ${total.toFixed(2)}</div>
      <button onClick={onPlace} disabled={cart.length===0} style={{marginTop:8}}>Place Order</button>
    </div>
  );
}
