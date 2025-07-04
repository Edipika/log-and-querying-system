const express = require('express');
const router = express.Router();
const { addLog,showLogs,searchLogs  } = require('../controllers/logControllers');



router.post('/add', addLog);
router.get('/show', showLogs); 
router.get('/search', searchLogs);


module.exports = router; 