const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

//custom cleaner thats ran before each test
beforeEach(() => {
	return db.migrate
		.rollback()
		.then(() => db.migrate.latest())
		.then(() => db.seed.run());
});

test('POST /api/users/register to be successful', async () => {
	const response = await request(server)
		.post('/api/users/register')
		.send({ username: 'Lucky', password: 'Dube', email: 'ld@rasta.com' });
});
