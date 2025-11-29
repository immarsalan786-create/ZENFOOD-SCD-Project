
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuViewer from './components/MenuViewer';
import Cart from './components/Cart';
import OrderTracker from './components/OrderTracker';
const API = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export default function App(){
  const [menu,setMenu] = useState(null);
  const [cart,setCart] = useState([]);
  const [orderId,setOrderId] = useState(null);

  useEffect(()=>{ axios.get(`${API}/menu`).then(r=>setMenu(r.data)).catch(()=>{}); },[]);

  function addToCart(item){
    const ex = cart.find(c=>c.id===item.id);
    if(ex) setCart(cart.map(c=> c.id===item.id ? {...c, qty: c.qty+1} : c));
    else setCart([...cart, {...item, qty:1}]);
  }
  async function placeOrder(){
    const res = await axios.post(`${API}/order`, { items: cart, customer: { name:'Student', phone:'000' } });
    setOrderId(res.data.order.id);
    setCart([]);
    alert('Order placed: ' + res.data.order.id);
  }
  return (
    <div>
      <h1>ZENFOOD</h1>
      <div style={{display:'flex', gap:20}}>
        <div style={{flex:2}}><MenuViewer menu={menu} onAdd={addToCart} /></div>
        <div style={{flex:1}}><Cart cart={cart} onPlace={placeOrder} /><br/>{orderId && <OrderTracker orderId={orderId} />}</div>
      </div>
    </div>
  );
}
