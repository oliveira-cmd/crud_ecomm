const { Router } = require('express');
const routes = Router();
const userController = require('../controller/UserController');

routes.get('/', (req, res) => {
    res.send('Olá mundo');
});

routes.get('/getUsers',userController.getUsers);
routes.post('/users',userController.createUser);
routes.get('/user/:user_id', userController.getUserById);

routes.post('/login',(req, res) => {

});

routes.get('/products/:user_id',(req, res) => {

});
routes.get('product/:product_id',(req, res) => {

});
routes.post('products/:user_id',(req, res) => {

});
routes.delete('product/:user_id/:product_id',(req, res) => {

});
routes.post('/cart/:user_id',(req, res) => {

});
routes.get('/cart/cart_id',(req, res) => {

});
routes.get('cart/:cart_id/:user_id',(req, res) => {

});


module.exports = routes;