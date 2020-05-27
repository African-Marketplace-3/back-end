const router = require('express').Router();
const hashPass = require('bcryptjs');
const Users = require('./users-model.js');
const Products = require('../products/products-model.js');

router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.json({ users });
		})
		.catch((err) => {
			res.send(err);
		});
});
router.get('/:id', (req, res) => {
	Users.findById(req.params.id)
		.then((users) => {
			if (users) {
				res.status(200).json(users);
			} else {
				res.status(404).json({ message: 'Could not find a user with that id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error getting the user' });
		});
});

//update user
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	const hash = hashPass.hashSync(changes.password, 4);
	changes.password = hash;
	const updatedUser = { ...changes, id };

	Users.update(id, changes)
		.then((user) => {
			res.status(200).json({ updated: updatedUser });
		})
		.catch((error) => {
			res.status(500).json({ error: 'Cannot update user' });
		});
});

router.get('/:id/products', (req, res) => {
	const { id } = req.params;
	Products.findProductByUserId(id)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res
				.status(500)
				.json({ error: 'Could not get the list of products for user' });
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	Users.remove(id)
		.then((deleted) => {
			console.log(deleted);
			res.status(200).json({ success: ` Selected user was deleted` });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: ' Selected user could not be deleted' });
		});
});

router.post('/:id/products', (req, res) => {
	const { id } = req.params;
	let products = req.body;
	products = { ...products, user_id: id };
	Products.add(products)
		.then((newProd) => {
			res.status(201).json(newProd);
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error adding the product' });
		});
});

module.exports = router;
