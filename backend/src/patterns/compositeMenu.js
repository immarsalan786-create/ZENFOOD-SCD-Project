
class MenuComponent { toJSON(){ throw 'not implemented'; } }
class MenuComposite extends MenuComponent {
  constructor(name){ super(); this.name = name; this.children = []; }
  add(c){ this.children.push(c); }
  remove(c){ this.children = this.children.filter(x=>x!==c); }
  toJSON(){ return { type:'composite', name:this.name, children:this.children.map(c=>c.toJSON()) }; }
}
class MenuItem extends MenuComponent {
  constructor(id,name,price,desc=''){ super(); this.id=id; this.name=name; this.price=price; this.description=desc; }
  toJSON(){ return { type:'item', id:this.id, name:this.name, price:this.price, description:this.description }; }
}
module.exports = { MenuComposite, MenuItem };
