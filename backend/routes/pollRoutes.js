   // backend/routes/pollRoutes.js
   const express = require('express');
   const router = express.Router();
   const pollController = require('../controllers/pollController');

   // Define routes
   router.get('/', pollController.getPolls);
   router.post('/', pollController.createPoll);
   router.post('/role', pollController.addRole);
   router.get('/role', pollController.getRole);

   module.exports = router;