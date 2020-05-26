// Update with your config settings.
const pgConnection =
	process.env.DATABASE_URL || 'postgresql://postgres@localhost/auth';
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
		seeds: {},
	},

	testing: {
		client: 'sqlite3',
		connection: {
			filename: ':memory:',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
