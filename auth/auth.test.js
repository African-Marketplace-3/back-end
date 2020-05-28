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

test('POST /api/auth/register to be successful', async () => {
	const res = await request(server)
		.post('/api/auth/register')
		.send({ username: 'Lucky', password: 'gi', email: 'lg@rdssta.com' });
	console.log(res.body);
	expect(res.status).toBe(201);
	expect(res.body.data).toHaveProperty('password');
	expect(res.body).toMatchObject({
		message: 'Successful registration',
	});
});

// End to end test - Registration and login - Stretch
test('POST /api/auth/login to be successful', async () => {
	const register = await request(server)
		.post('/api/auth/register')
		.send({ username: 'Lucky', password: 'gi', email: 'lg@rdssta.com' });
	const res = await request(server)
		.post('/api/auth/login')
		.send({ username: 'Lucky', password: 'gi', email: 'lg@rdssta.com' });
	expect(res.status).toBe(200);
	expect(res.body).toMatchObject({ message: 'You are logged in' });
	console.log(res.body);
});
