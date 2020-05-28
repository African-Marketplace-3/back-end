# back-end

web unit 4 students repo

## DOCUMENTATION FOR THE API

## API END POINTS

POST /api/auth/register
POST /api/auth/login
GET /api/users
GET /api/users/id
PUT /api/users/id
DELETE /api/users/id
GET /api/users/id/products
POST /api/users/id/products
POST /api/products
GET /api/products
GET /api/products/:id
PUT /api/products/:id
DELETE /api/products/:id

## SCHEMA FOR USERS

username: (required and must be unique)
password: (required and should be a string)
email: (required and should be a string)

## SCHEMA FOR PRODUCTS

name: (require and should be a string)
description: (required - string)
market_location: (required - string)
quantity: (not required - string)
price: (not required -string)
user_id: (not required - integer)
