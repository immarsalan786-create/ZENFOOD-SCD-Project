
const express = require('express');
const router = express.Router();
const menuService = require('../services/menuService');
const orderController = require('../controllers/orderController');

router.get('/menu', (req,res) => res.json(menuService.getMenu()));
router.post('/order', orderController.placeOrder);
router.get('/order/:id', orderController.getOrder);
router.post('/order/:id/cancel', orderController.cancelOrder);
router.post('/order/:id/status', orderController.updateStatus);

module.exports = router;
