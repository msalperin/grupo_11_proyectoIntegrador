const express = require('express');
const routerUsuarios = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware')


const usuariosController = require('../controllers/usersController');
const router = require('./mainRouter');
const usersController = require('../controllers/usersController');

const { body }  = require('express-validator');

const validations = [
    
    body("first_name")
     .notEmpty().withMessage('Ingrese su nombre').bail()
     .isLength({min:2}).withMessage('Su nombre tener mas de dos caracteres').bail(),
    body('last_name')
     .notEmpty().withMessage('Ingrese su apellido')
     .isLength({min:2}).withMessage('Su nombre tener mas de dos caracteres').bail(),
    body('email')
     .notEmpty().withMessage('Ingrese un mail valido').bail()
     .isEmail().withMessage('Ingrese un formato de email').bail(),
    body('password')
     .notEmpty().withMessage('Ingrese un password').bail()
     .isLength({min:2}).withMessage('El minimo del password son 8 caracteres').bail(),
]

const logginValidation = [
   body('email')
    .notEmpty().withMessage('Debes completar el campo de email')
    .isEmail().withMessage('Debes completar el campo con un email válido').bail(),
   body('password')
    .notEmpty().withMessage('Debes completar el campo de contraseña').bail()

]

/*acceso login usuario*/
routerUsuarios.get('/acceso', guestMiddleware, usuariosController.acceso);
routerUsuarios.post('/acceso', logginValidation, usuariosController.loginProcess);

/*acceso nuevo usuario*/
routerUsuarios.get('/acceso/nuevoUsuario',guestMiddleware, usuariosController.nuevoUsuario);
routerUsuarios.post('/acceso/nuevoUsuario', validations , usuariosController.processRegister);

/*acceso perfil usuario*/

routerUsuarios.get('/acceso/perfil', usuariosController.perfil);

/*logout*/
routerUsuarios.get('/logout/', usersController.logout)

module.exports = routerUsuarios;