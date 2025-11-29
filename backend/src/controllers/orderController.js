
const orderService = require('../services/orderService');

exports.placeOrder = (req,res) => {
  const order = orderService.placeOrder(req.body);
  res.json({ success:true, order });
};
exports.getOrder = (req,res) => {
  const order = orderService.getOrder(req.params.id);
  if(!order) return res.status(404).json({ error:'Not found' });
  res.json({ order });
};
exports.cancelOrder = (req,res) => {
  const o = orderService.cancelOrder(req.params.id);
  if(!o) return res.status(404).json({ error:'Not found' });
  res.json({ success:true, order:o });
};
exports.updateStatus = (req,res) => {
  const { status } = req.body;
  const o = orderService.updateStatus(req.params.id, status);
  if(!o) return res.status(404).json({ error:'Not found' });
  res.json({ success:true, order:o });
};
