const { Router } = require('express');
const MercadoPagoService = require('../services/mercadoPagoService');
const MercadoPagoController = require('../controllers/mercadoPagoController');

const mercadoPagoService = new MercadoPagoService();
const mercadoPagoController = new MercadoPagoController(mercadoPagoService);

const router = Router();

router.post('/subscription/new', (req, res) => mercadoPagoController.getMercadoPagoSubscriptionLink(req, res));

module.exports = router;
