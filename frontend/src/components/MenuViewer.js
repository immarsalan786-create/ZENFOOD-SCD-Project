
import React from 'react';
export default function MenuViewer({menu,onAdd}){
  if(!menu) return <div>Loading menu...</div>;
  return (
    <div>
      {menu.children.map(cat=>(
        <div key={cat.name} style={{marginBottom:12}}>
          <h3>{cat.name}</h3>
          <ul>
            {cat.children.map(item=>(
              <li key={item.id} style={{marginBottom:8}}>
                <b>{item.name}</b> - ${item.price.toFixed(2)} <button onClick={()=>onAdd(item)}>Add</button>
                <div style={{fontSize:12,color:'#666'}}>{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
