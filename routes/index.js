var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
  res.render('index', { title: 'Express' });
});

router.get('/inserir', async function (req, res, next){
 const autores = await Autor.inserir();
  res.json(autores.rows);
});

module.exports = router;
