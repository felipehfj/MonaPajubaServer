const express = require('express');
const routes = express.Router();

const PajubaController = require('../controllers/PajubaController');
const AuditController = require('../controllers/AuditController');

routes.get('/pajubas', PajubaController.index)
routes.get('/pajubas/daily', PajubaController.getDaily)
routes.get('/pajubas/available', PajubaController.getAvailable)
routes.get('/pajubas/random', PajubaController.getRandom)
routes.get('/pajubas/count', PajubaController.getCountExpression)
routes.get('/pajubas/:title', PajubaController.getOne)
routes.post('/pajubas', PajubaController.store)
routes.put('/pajubas', PajubaController.update)
routes.delete('/pajubas/:title', PajubaController.remove)

routes.get('/audits', AuditController.index)


module.exports = routes;