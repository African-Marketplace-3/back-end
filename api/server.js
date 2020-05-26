const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router.js');
const productsRouter = require('../products/products-router.js');
// const authRouter = require('../auth/router.js');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/products', productsRouter);
// server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
	res.send('Server is up and running');
});

module.exports = server;
