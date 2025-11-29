
const { v4: uuidv4 } = require('uuid');
const { PlaceOrderCommand, CancelOrderCommand, UpdateStatusCommand } = require('../patterns/commandOrder');
const OrderManager = require('../patterns/orderManagerSingleton');
const { Subject, RestaurantObserver, DeliveryObserver } = require('../patterns/observer');

const notifier = new Subject();
notifier.subscribe(new RestaurantObserver('ZenRest'));
notifier.subscribe(new DeliveryObserver('Driver01'));

const receiver = {
  place: (orderData) => {
    const o = {
      id: uuidv4(),
      items: orderData.items || [],
      total: (orderData.items || []).reduce((s,i)=> s + (i.price || 0) * (i.qty || 1), 0),
      status: 'PLACED',
      customer: orderData.customer || {}
    };
    OrderManager.create(o);
    notifier.notify({ event:'order_placed', order: o });
    return o;
  },
  cancel: (orderId) => {
    const o = OrderManager.get(orderId);
    if(!o) return null;
    o.status = 'CANCELLED';
    notifier.notify({ event:'order_cancelled', order: o });
    return o;
  },
  updateStatus: (orderId, status) => {
    const o = OrderManager.get(orderId);
    if(!o) return null;
    o.status = status;
    notifier.notify({ event:'order_status_updated', order: o });
    return o;
  }
};

module.exports = {
  placeOrder(orderData){ const cmd = new PlaceOrderCommand(receiver, orderData); return cmd.execute(); },
  cancelOrder(orderId){ const cmd = new CancelOrderCommand(receiver, orderId); return cmd.execute(); },
  updateStatus(orderId, status){ const cmd = new UpdateStatusCommand(receiver, orderId, status); return cmd.execute(); },
  getOrder(orderId){ return OrderManager.get(orderId); },
  allOrders(){ return OrderManager.all(); }
};
