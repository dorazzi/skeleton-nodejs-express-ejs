var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");
const Livro = require("../models/livro");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function (req, res, next){
 const autores = await Autor.inserir(req.body);
 res.json(autores.rows);
   
});

router.put('/atualizar', async function (req, res, next){
 const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function (req, res, next){
 const autores = await Autor.deletar(req.body.id);
  res.json(autores.rows);
});


//livro

router.get('/select2', async function(req, res, next) {
  const livros = await Livro.selecionarr();
  res.json(livros.rows);
});

router.post('/inserir2', async function (req, res, next){
 const livros = await Livro.inserirr(req.body);
 res.json(livros);
   
});

router.put('/atualizar2', async function (req, res, next){
 const livros = await Livro.atualizarr(req.body);
  res.json(livros);
});

router.delete('/deletar2', async function (req, res, next){
 const livros = await Livro.deletarr(req.body.id);
  res.json(livros);
});
module.exports = router;

