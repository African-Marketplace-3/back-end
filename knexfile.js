// Update with your config settings.
const pgConnection =
	process.env.DATABASE_URL || 'postgresql://postgres@localhost/products';
module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/users.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	testing: {
		client: 'sqlite3',
		connection: {
			filename: ':memory:',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: pgConnection,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
