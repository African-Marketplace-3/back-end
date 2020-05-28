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

test('GET /api/users to get all users', async () => {
	const res = await request(server).get('/api/users');
	console.log(res.body);
	expect(res.status).toBe(200);
});
