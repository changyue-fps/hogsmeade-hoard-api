const router = require('express').Router();
const authController = require('../controllers/auth-controller');

router.route('/likes').post(authController.authenticateToken, authController.addToLike);
router.route('/').get(authController.authenticateToken, authController.getProfile);

module.exports = router;