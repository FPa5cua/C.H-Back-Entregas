const { Router } = require('express');
const routerProd = Router();
const {Container} = require('../classes/constructor');

const ProdContainer = new Container();

routerProd.get('/', (req, res) => {
    res.json(ProdContainer.getAll())
}); 

routerProd.get('/:id', (req, res) => {
    const num = parseInt(req, params.id)
    res.json(ProdContainer.getById(num))
});

routerProd.post('/', (req, res) => {
    const product = req.body 
    res.json(ProdContainer.save(product))
});

routerProd.put('/:id', (req, res) => {
    const num = parseInt(req, params.id)
    const product = req.body
    res.json(ProdContainer.modifyById(num, product))
});

routerProd.delete('/:id', (req, res) => {
    const num = parseInt(req, params.id)
    res.json(ProdContainer.deleteById(num))
});


module.exports = routerProd