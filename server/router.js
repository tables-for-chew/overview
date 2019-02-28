var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/:id', controller.overview.get);

router.post('/:id', controller.overview.post);

router.put('/:id', controller.overview.put);

router.delete('/:id', controller.overview.delete);

// router.get('/products/:id', controller.products.get);


module.exports = router;

