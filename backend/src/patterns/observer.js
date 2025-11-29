
class Subject{
  constructor(){ this.observers = []; }
  subscribe(o){ this.observers.push(o); }
  unsubscribe(o){ this.observers = this.observers.filter(x=>x!==o); }
  notify(payload){ this.observers.forEach(o=>{ try{ o.update(payload); }catch(e){ console.error(e); } }); }
}
class RestaurantObserver{ constructor(name){ this.name=name; } update(payload){ console.log(`[Restaurant ${this.name}] event=${payload.event} order=${payload.order && payload.order.id}`); } }
class DeliveryObserver{ constructor(driver){ this.driver = driver; } update(payload){ console.log(`[Delivery ${this.driver}] event=${payload.event} order=${payload.order && payload.order.id}`); } }
module.exports = { Subject, RestaurantObserver, DeliveryObserver };
