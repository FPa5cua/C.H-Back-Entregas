const express = require('express');
const app = express();
const routerProd = require('./src/routes/prodManage');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'))
app.use('/api/products',routerProd)

//server
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {console.log("server runing")});
server.on('error', error => console.log(`Error ${error}`));


