const Router = require('express');

const authMiddleware = require('./app/middlewares/authMiddleware.ts');

const UserController = require('./app/controllers/UserController.ts');
const AuthController = require('./app/controllers/AuthController.ts');

const router = Router();

// Rotas de usuários

router.get('/users', UserController.index);
router.post('/createuser', UserController.create);
router.post('/deleteuser/:id', UserController.delete);

// Rota de autenticação

router.post('/auth', AuthController.login);

// Inicio das rotas protegidas por autenticação

router.use(authMiddleware);

// Rotas protegidas

module.exports = router;
