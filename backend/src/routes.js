const express = require('express');
const moduleController = require('./controllers/moduleController');
const loginController = require('./controllers/loginController');
const unityController = require('./controllers/unityController');
// import multer from 'multer';
// const multerConfig = require('./config/multer');
// const { celebrate, Joi } = require('celebrate');

const routes = express.Router();
// const upload = multer(multerConfig);

routes.get('/', (request, response) => {
    return response.json( "Server is UP!" )
});

routes.post('/module', moduleController.create);
routes.get('/module', moduleController.index);
routes.delete('/module/:id', moduleController.delete);
routes.put('/module/:id', moduleController.update);

routes.get('/unity', unityController.index);
routes.delete('/unity/:id', unityController.delete);
routes.put('/unity/:id', unityController.update);
routes.post('/unity', unityController.create);
// routes.post(
//     '/unity',
//     upload.single('image'),
//     celebrate({
//         body: Joi.object().keys({
//             name: Joi.string().required(),
//             image_url: Joi.string().required().email(),
//             content: Joi.string().required(),
//             module_id: Joi.number().required(),
//         })
//     }, {
//         abortEarly: false
//     }),
//     unityController.create
// );

routes.post('/login', loginController.create);
routes.get('/login', loginController.index);
routes.delete('/login/:id', loginController.delete);

module.exports = routes;