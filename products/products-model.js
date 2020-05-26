const db = require('../data/dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findProductByUSerId,
	update,
	remove,
};

function find() {
	return db('products').select(
		'id',
		'name',
		'market_location',
		'description',
		'quantity',
		'price',
		'user_id'
	);
}

function findBy(filter) {
	return db('products').where(filter);
}

function add(product) {
	return db('products')
		.insert(product, 'id')
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}

function findById(id) {
	return db('products').where({ id }).first();
}

function findProductByUSerId(userId) {
	return db('users')
		.join('products', 'users.id', 'products.user_id')
		.select(
			'products.id',
			'products.name',
			'products.market_location',
			'products.description',
			'products.quantity',
			'products.price',
			'products.user_id'
		)
		.where('users.id', userId);
}

function update(id, name) {
	return db('products').where('id', Number(id)).update(name);
}

function remove(id) {
	return db('products').where('id', Number(id)).del();
}
