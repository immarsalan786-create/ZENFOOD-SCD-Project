
const menuService = require('../services/menuService');
const orderService = require('../services/orderService');
module.exports = {
  browseMenu(){ return menuService.getMenu(); },
  placeOrder(orderData){ return orderService.placeOrder(orderData); },
  trackOrder(orderId){ return orderService.getOrder(orderId); }
};
