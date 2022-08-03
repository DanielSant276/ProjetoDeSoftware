const express = require ('express');
const path = require('path'); 
const router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, "../", "teste/paginaInicial.html"));
});

module.exports = router ;
