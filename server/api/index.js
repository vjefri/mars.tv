const router = require('express').Router();
const API = require('../lib/api');

router.use(API.notFound);
router.use(API.handleErrors);

module.exports = router;
