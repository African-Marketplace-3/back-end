exports.seed = function (knex) {
	// Inserts seed entries
	return knex('users').insert([
		{ username: 'Joes', password: 'bogey', email: 'joe@bogey.com' },
	]);
};
