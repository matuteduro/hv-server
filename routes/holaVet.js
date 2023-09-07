
const { Router } = require('express');
const { getDataFromFront } = require('../controllers/holaVet');

const router = Router();

router.post('/',[

], getDataFromFront);

module.exports = router;