const Router = require('express');

const UserController = require('./app/controllers/UserController.ts');

const router = Router();

router.get('/users', UserController.index);
router.post('/createuser', UserController.create);

module.exports = router;
