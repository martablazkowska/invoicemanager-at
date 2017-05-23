var router = require('express').Router()


router.use(require('./auth'));
router.use(require('./tasks'));
router.use(require('./users'));

module.exports = router