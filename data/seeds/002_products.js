exports.seed = function (knex) {
	// Inserts seed entries
	return knex('products').insert([
		{
			name: 'Hat',
			description: 'straw-hat',
			market_location: 'farm',
			quantity: '40',
			price: '$100',
			user_id: 1,
		},
		{
			name: 'Shirt',
			description: 'soft',
			market_location: 'Angola',
			quantity: '455',
			price: '$53',
			user_id: 1,
		},
		{
			name: 'Belts',
			description: 'leather',
			market_location: 'Downtown',
			quantity: '102',
			price: '$24',
			user_id: 1,
		},
		{
			name: 'Necklace',
			description: 'handmade',
			market_location: 'airport',
			quantity: '220',
			price: '$70',
			user_id: 1,
		},
		{
			name: 'Socks',
			description: 'fabric',
			market_location: 'uptown',
			quantity: '80',
			price: '$50',
			user_id: 1,
		},
	]);
};
