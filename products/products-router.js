const router = require('express').Router();
const Products = require('./products-model.js');

router.get('/', (req, res) => {
	Products.find()
		.then((products) => {
			res.json(products);
		})
		.catch((err) => res.json({ error: err.message }));
});

router.get('/:id', (req, res) => {
	Products.findById(req.params.id)
		.then((products) => {
			if (products) {
				res.status(200).json(products);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find a product with that id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error getting the product' });
		});
});

router.post('/', (req, res) => {
	Products.add(req.body)
		.then((product) => {
			res.status(201).json(product);
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error adding the product' });
		});
});
//edit
router.put('/:id', (req, res) => {
	const changes = req.body;
	const { id } = req.params;
	console.log(id);
	Products.update(id, changes)
		.then((products) => {
			if (products) {
				Products.findById(id)
					.then((product) => {
						res.status(200).json({ product });
					})
					.catch((error) => {
						res.status(500).json({ message: 'Error updating the product' });
					});
			} else {
				res.status(404).json({ message: 'Error finding the product' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error editing the information' });
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	Products.remove(id)
		.then((products) => {
			if (products) {
				res.status(200).json({ message: 'product deleted' });
			} else {
				res.status(404).json({
					message: 'The product with the specified ID does not exist.',
				});
			}
		})
		.catch((err) => {
			console.log(err);

			res.status(500).json({ error: 'The product could not be removed' });
		});
});

module.exports = router;
