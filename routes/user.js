const router = require('express').Router();
const authController = require('../controllers/auth-controller');

router.route('/likes').post(authController.authenticateToken, authController.addToLike);
router.route('/').get(authController.authenticateToken, authController.getProfile);
router.route('/likes/:id').delete(authController.authenticateToken, authController.deleteLike);
module.exports = router;