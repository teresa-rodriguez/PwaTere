const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: true });

var productos=[
  {
      "id":1,
      "image":"blush1.jpg",
      "precio":20,
      "title":"BLUSH BEAUTY CREATIONS 2 TONOS"
  },
  {
      "id":2,
      "image":"blush2.jpg",
      "precio":35,
      "title":"BLUSH BEAUTY CREATIONS TONOS ROJOS"
  },
  {
      "id":3,
      "image":"blush3.jpg",
      "precio":15.50,
      "title":"BLUSH BEAUTY CREATIONS 6 TONOS"
  },
  {
      "id":4,
      "image":"blush4.jpg",
      "precio":20.20,
      "title":"BLUSH BEAUTY CREATIONS"
  },
  {
      "id":5,
      "image":"sombras1.jpg",
      "precio":19,
      "title":"IRRESISTIBLE EYE SHADOW PALETTE"
  },
  {
      "id":6,
      "image":"sombras2.jpg",
      "precio":45,
      "title":"ILUMINADORES 4 TONALIDADES"
  },
  {
      "id":7,
      "image":"sombras3.jpg",
      "precio":23.99,
      "title":"PALETA DE SOMBRAS BEAUTY CREATIONS"
  },
  {
      "id":8,
      "image":"sombras4.jpg",
      "precio":50,
      "title":"PALETA DE SOMBRAS METALICAS"
  },
  {
      "id":9,
      "image":"labial1.jpg",
      "precio":16,
      "title":"Trust GXT 881 Odyss Teclado Gaming Semi-Mecánico RGB"
  },
  {
      "id":10,
      "image":"labial2.png",
      "precio":17.50,
      "title":"LABIALES SANTA BABY MINIS TONOS ROSAS"
  },
  {
      "id":11,
      "image":"labial3.png",
      "precio":45,
      "title":"LABIALES SANTA BABY MINIS TONOS MORADOS"
  },
  {
      "id":12,
      "image":"labial4.png",
      "precio":45,
      "title":"LABIALES SANTA BABY MINIS TONOS ROJOS"
  }

];
var pedidos =[];

router.get('/productos/', (req, res) => {
    res.json(productos);
});
router.get('/pedido/', (req, res) => {
  res.status(200).json(pedidos);
});


router.post('/pedido/guardaPedido', urlencodedParser, (req, res) => {

  pedidos.push(req.body);
  res.status(201).send("REgistro creado")
  });



module.exports = router;
