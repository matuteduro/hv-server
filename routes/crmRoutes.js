const { Router } = require('express');
const { getRegistros, getPrecios } = require('../controllers/crmControllers');

const router = Router();

router.post('/getRegistros', getRegistros);
router.post('/getPrecios', getPrecios);

module.exports = router;
