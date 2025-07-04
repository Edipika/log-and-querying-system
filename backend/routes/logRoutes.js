const express = require('express');
const router = express.Router();
const { addLog,showLogs,searchLogs,filterLogs  } = require('../controllers/logControllers');



router.post('/add', addLog);
router.get('/show', showLogs); 
router.get('/search', searchLogs);
router.get('/filter', filterLogs);


module.exports = router; 