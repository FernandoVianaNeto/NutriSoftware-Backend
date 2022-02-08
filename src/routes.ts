const Router = require('express');

const authMiddleware = require('./app/middlewares/authMiddleware.ts');

const UserController = require('./app/controllers/UserController.ts');

const router = Router();

router.get('/users', UserController.index);
router.post('/createuser', UserController.create);
router.post('/deleteuser/:id', UserController.delete);

// Inicio das rotas protegidas por autenticação

router.use(authMiddleware);

// Rotas protegidas

module.exports = router;
