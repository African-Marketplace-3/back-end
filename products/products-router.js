const router = require('express').Router();
const Products = require('./products-model.js');

router.get('/', (req, res) => {
	Products.find()
		.then((products) => {
			res.json(products);
		})
		.catch((err) => res.json({ error: err.message }));
});

module.exports = router;
