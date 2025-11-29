
class OrderManager {
  constructor(){ if(OrderManager.instance) return OrderManager.instance; this.orders = {}; OrderManager.instance = this; }
  create(order){ this.orders[order.id] = order; }
  get(id){ return this.orders[id]; }
  update(id, fields){ Object.assign(this.orders[id], fields); return this.orders[id]; }
  all(){ return Object.values(this.orders); }
}
module.exports = new OrderManager();
