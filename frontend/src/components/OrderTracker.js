
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export default function OrderTracker({orderId}){
  const [order,setOrder] = useState(null);
  useEffect(()=>{
    let t = setInterval(()=> axios.get(`${API}/order/${orderId}`).then(r=>setOrder(r.data.order)).catch(()=>{}), 2000);
    return ()=> clearInterval(t);
  },[orderId]);
  if(!order) return <div>Loading order...</div>;
  return (
    <div style={{border:'1px solid #eee', padding:8}}>
      <h4>Order {order.id}</h4>
      <div>Status: {order.status}</div>
      <div>Total: ${order.total.toFixed(2)}</div>
    </div>
  );
}
