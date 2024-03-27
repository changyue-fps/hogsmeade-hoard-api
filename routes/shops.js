const router = require('express').Router();
const shopController = require('../controllers/shops-controller');

router.route('/').get(shopController.index);

router.route('/:id').get(shopController.findOne);

module.exports = router;