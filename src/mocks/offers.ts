import { Offer } from '../types/offer'

const OFFERS: Offer[] = [
	{
		id: '9cc509b8-0bca-44ab-9ece-5e78d76bb348',
		title: 'Loft Studio in the Central Area',
		type: 'hotel',
		price: 405,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.868610000000004,
			longitude: 2.342499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.2
	},
	{
		id: '5cb00375-8c34-4b52-8f29-1268a33895be',
		title: 'Loft Studio in the Central Area',
		type: 'room',
		price: 239,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.858610000000006,
			longitude: 2.330499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.5
	},
	{
		id: '48500614-37cb-41bd-a65f-17db36b59728',
		title: 'Canal View Prinsengracht',
		type: 'room',
		price: 177,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.834610000000005,
			longitude: 2.335499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.4
	},
	{
		id: '719b4ece-c0f9-46db-a585-25d8a9f48f77',
		title: 'The Joshua Tree House',
		type: 'hotel',
		price: 483,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.85761,
			longitude: 2.358499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.7
	},
	{
		id: 'd996737e-3a34-42bd-8732-8e6b075dcb49',
		title: 'Perfectly located Castro',
		type: 'house',
		price: 129,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.87561,
			longitude: 2.375499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.6
	},
	{
		id: '24caa16d-5bb7-4ef3-9f6b-db26e3ac911e',
		title: 'The Pondhouse - A Magical Place',
		type: 'hotel',
		price: 252,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.87961000000001,
			longitude: 2.353499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.9
	},
	{
		id: '5ceda1ff-cf20-4c35-8309-4597b705b573',
		title: 'Canal View Prinsengracht',
		type: 'room',
		price: 120,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.834610000000005,
			longitude: 2.364499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.9
	},
	{
		id: '5b976fff-7b58-4bc4-86a7-4b81341f6783',
		title: 'Perfectly located Castro',
		type: 'hotel',
		price: 450,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.837610000000005,
			longitude: 2.3454990000000002,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1
	},
	{
		id: '5d8db7b1-ce7d-42e6-ad7b-d500042f323a',
		title: 'Canal View Prinsengracht',
		type: 'house',
		price: 645,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.84761,
			longitude: 2.356499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.4
	},
	{
		id: '1322303d-6394-438c-aab0-e3a60cf0ab81',
		title: 'The Pondhouse - A Magical Place',
		type: 'house',
		price: 319,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.862610000000004,
			longitude: 2.369499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.7
	},
	{
		id: '7bd1b682-1df6-4714-9501-58ecf0c8a974',
		title: 'Penthouse, 4-5 rooms + 5 balconies',
		type: 'room',
		price: 189,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.83861,
			longitude: 2.350499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 2.7
	},
	{
		id: '449ca473-a478-4702-b097-cab144e0f93f',
		title: 'The house among olive ',
		type: 'hotel',
		price: 445,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
		city: {
			name: 'Paris',
			location: {
				latitude: 48.85661,
				longitude: 2.351499,
				zoom: 13
			}
		},
		location: {
			latitude: 48.84461,
			longitude: 2.374499,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.3
	},

	{
		id: '7bf4085d-7897-49d2-95d0-740ed5c6b917',
		title: 'The Pondhouse - A Magical Place',
		type: 'hotel',
		price: 369,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.930361,
			longitude: 6.937974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.1
	},
	{
		id: 'f1558923-d51e-4d17-ac2e-cec92c598baf',
		title: 'House in countryside',
		type: 'apartment',
		price: 402,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.960361,
			longitude: 6.9509739999999995,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.6
	},
	{
		id: '4d21ffd5-f4ac-4a9d-9fec-ae53c5da47b6',
		title: 'Waterfront with extraordinary view',
		type: 'room',
		price: 140,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.918461,
			longitude: 6.969974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.1
	},
	{
		id: 'b62fb4ed-a244-4c28-8fd4-f29c200704e4',
		title: 'Tile House',
		type: 'house',
		price: 334,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.957361,
			longitude: 6.9509739999999995,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.7
	},
	{
		id: 'e85b1273-affb-4770-8083-697bcb4bb506',
		title: 'Loft Studio in the Central Area',
		type: 'hotel',
		price: 253,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.951361,
			longitude: 6.944974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.8
	},
	{
		id: '6a1d1022-b34b-45e0-a00a-c6491ff3206b',
		title: 'House in countryside',
		type: 'house',
		price: 306,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.959361,
			longitude: 6.978974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.4
	},
	{
		id: 'c83d9bc4-5727-4ad6-8a25-0c745c44a6d6',
		title: 'Tile House',
		type: 'house',
		price: 603,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.932361,
			longitude: 6.960974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3.6
	},
	{
		id: '6d9a417e-5169-42f5-a7e5-efadc724eab0',
		title: 'Tile House',
		type: 'house',
		price: 194,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.954361,
			longitude: 6.982974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.9
	},
	{
		id: 'b7af0ef8-d489-45f3-86b4-427587f20be2',
		title: 'Perfectly located Castro',
		type: 'apartment',
		price: 287,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.945361,
			longitude: 6.962974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 2.6
	},
	{
		id: '027d18b3-ce0b-4436-8d6c-8dea09d8eedc',
		title: 'The Pondhouse - A Magical Place',
		type: 'hotel',
		price: 454,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.917361,
			longitude: 6.977974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 2.7
	},
	{
		id: 'b9afb189-0f12-47d5-848c-fa4cab28d89b',
		title: 'House in countryside',
		type: 'room',
		price: 292,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
		city: {
			name: 'Cologne',
			location: {
				latitude: 50.938361,
				longitude: 6.959974,
				zoom: 13
			}
		},
		location: {
			latitude: 50.945361,
			longitude: 6.935974,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.8
	},
	{
		id: '5a6ac09f-65f5-49b2-a1df-0bd6d5264b55',
		title: 'The Pondhouse - A Magical Place',
		type: 'hotel',
		price: 487,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.854557,
			longitude: 4.364697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3.6
	},
	{
		id: 'c8d39d72-9429-4edd-9e4a-03d395622b53',
		title: 'Amazing and Extremely Central Flat',
		type: 'room',
		price: 207,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.867557,
			longitude: 4.371696999999999,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.3
	},
	{
		id: '75282563-b910-429f-a816-8b9fcf8097c4',
		title: 'Amazing and Extremely Central Flat',
		type: 'apartment',
		price: 197,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.828556999999996,
			longitude: 4.362697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.8
	},
	{
		id: 'e01ad79c-d96f-4ad3-8abf-5c84e199207c',
		title: 'Canal View Prinsengracht',
		type: 'apartment',
		price: 406,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.835556999999994,
			longitude: 4.354697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.7
	},
	{
		id: '532b86cd-0a7c-4662-9e69-c8ab5f144c13',
		title: 'House in countryside',
		type: 'apartment',
		price: 155,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.867557,
			longitude: 4.339697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3.9
	},
	{
		id: '00c5c848-f816-45fb-8b8c-2978ed8cc79b',
		title: 'Wood and stone place',
		type: 'house',
		price: 460,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.839557,
			longitude: 4.346697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4
	},
	{
		id: '614b99e2-2f97-4e2e-b0fa-d1f6ae556bc9',
		title: 'The house among olive ',
		type: 'hotel',
		price: 469,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.844556999999995,
			longitude: 4.346697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.6
	},
	{
		id: '01feffff-c246-4683-9be0-7be4f6976518',
		title: 'Perfectly located Castro',
		type: 'house',
		price: 959,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.865556999999995,
			longitude: 4.371696999999999,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.5
	},
	{
		id: 'ed139a37-270b-44c5-8bf8-3d553ba8944e',
		title: 'Nice, cozy, warm big bed apartment',
		type: 'hotel',
		price: 396,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.869557,
			longitude: 4.332697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.8
	},
	{
		id: '971c0c89-60e3-45e9-b2f7-a84f4f772a27',
		title: 'Loft Studio in the Central Area',
		type: 'house',
		price: 228,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.860557,
			longitude: 4.376697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.1
	},
	{
		id: 'cc196c17-2bec-4a50-9718-a77854f670aa',
		title: 'The Joshua Tree House',
		type: 'hotel',
		price: 282,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.862556999999995,
			longitude: 4.375697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.6
	},
	{
		id: '9f172192-5836-4ed3-8573-1c6639dbda57',
		title: 'The Pondhouse - A Magical Place',
		type: 'hotel',
		price: 104,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.842557,
			longitude: 4.3536969999999995,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.2
	},
	{
		id: '407ceaab-0540-4c8e-876c-e2a96cb83c35',
		title: 'Wood and stone place',
		type: 'room',
		price: 114,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.822556999999996,
			longitude: 4.347697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.9
	},
	{
		id: 'bf6a6ee4-ed97-4a73-95c2-9b3db7774a36',
		title: 'The house among olive ',
		type: 'room',
		price: 181,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.867557,
			longitude: 4.357697,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.9
	},
	{
		id: '8b8766f0-20e6-4ad6-8b78-32db5f06230b',
		title: 'Nice, cozy, warm big bed apartment',
		type: 'house',
		price: 552,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
		city: {
			name: 'Brussels',
			location: {
				latitude: 50.846557,
				longitude: 4.351697,
				zoom: 13
			}
		},
		location: {
			latitude: 50.842557,
			longitude: 4.363696999999999,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.6
	},
	{
		id: 'd7886dcf-404e-42c8-b2b4-c2d8530fb527',
		title: 'The Joshua Tree House',
		type: 'room',
		price: 155,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.36554,
			longitude: 4.911976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.2
	},
	{
		id: '4cebd5a3-948a-449a-9035-ea968eb08e3c',
		title: 'Perfectly located Castro',
		type: 'house',
		price: 999,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.385540000000006,
			longitude: 4.902976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.5
	},
	{
		id: 'fe34d7e4-e74a-49f6-8caa-d42345f6b346',
		title: 'Loft Studio in the Central Area',
		type: 'apartment',
		price: 111,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.397540000000006,
			longitude: 4.9099759999999995,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3
	},

	{
		id: 'cfbc36c3-258a-474d-a0b5-674df4e01ac5',
		title: 'Beautiful & luxurious apartment at great location',
		type: 'house',
		price: 157,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.36354,
			longitude: 4.911976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.2
	},
	{
		id: '20e0bed8-8a1f-42e4-954b-4f747a889138',
		title: 'Wood and stone place',
		type: 'apartment',
		price: 321,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.36354,
			longitude: 4.889976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2
	},
	{
		id: 'a1d2bacb-c60b-4b94-af19-7c71c19ee954',
		title: 'Tile House',
		type: 'hotel',
		price: 430,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.388540000000006,
			longitude: 4.899976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.5
	},
	{
		id: 'f97c45dd-5174-47e4-9848-7473563a5b2e',
		title: 'Waterfront with extraordinary view',
		type: 'house',
		price: 496,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.36954,
			longitude: 4.914976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.7
	},
	{
		id: 'be38e2e4-d511-42e7-beb6-557fac697468',
		title: 'Wood and stone place',
		type: 'hotel',
		price: 497,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.37554,
			longitude: 4.9019759999999994,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3.1
	},
	{
		id: 'f4778f46-42ca-419c-9a8a-eaf8676e2850',
		title: 'Tile House',
		type: 'apartment',
		price: 326,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.385540000000006,
			longitude: 4.886976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2
	},
	{
		id: 'e733148a-9803-4f92-89b4-b5a01aa33635',
		title: 'Beautiful & luxurious apartment at great location',
		type: 'apartment',
		price: 421,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
		city: {
			name: 'Hamburg',
			location: {
				latitude: 53.550341,
				longitude: 10.000654,
				zoom: 13
			}
		},
		location: {
			latitude: 53.528341000000005,
			longitude: 10.018654000000002,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.1
	},
	{
		id: '95db54ee-8bf7-49b8-98c0-7cca22d7afff',
		title: 'Amazing and Extremely Central Flat',
		type: 'house',
		price: 333,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
		city: {
			name: 'Hamburg',
			location: {
				latitude: 53.550341,
				longitude: 10.000654,
				zoom: 13
			}
		},
		location: {
			latitude: 53.538341,
			longitude: 9.976654000000002,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 3.2
	},
	{
		id: 'be8357c0-7b5e-45de-b9ef-a4927e02ddd6',
		title: 'Tile House',
		type: 'hotel',
		price: 393,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
		city: {
			name: 'Hamburg',
			location: {
				latitude: 53.550341,
				longitude: 10.000654,
				zoom: 13
			}
		},
		location: {
			latitude: 53.563341,
			longitude: 10.019654000000001,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 1.3
	},
	{
		id: '6a31c691-19d5-46c9-8fa2-62447b2e23ec',
		title: 'Canal View Prinsengracht',
		type: 'apartment',
		price: 410,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
		city: {
			name: 'Dusseldorf',
			location: {
				latitude: 51.225402,
				longitude: 6.776314,
				zoom: 13
			}
		},
		location: {
			latitude: 51.239402000000005,
			longitude: 6.756314000000001,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.4
	},
	{
		id: '35cf4926-fd03-42ce-a1e2-f337aa36b6a4',
		title: 'Nice, cozy, warm big bed apartment',
		type: 'apartment',
		price: 301,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
		city: {
			name: 'Dusseldorf',
			location: {
				latitude: 51.225402,
				longitude: 6.776314,
				zoom: 13
			}
		},
		location: {
			latitude: 51.243402,
			longitude: 6.791314,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 4.7
	},
	{
		id: '2352542d-7f10-45ec-9a43-045a6fa86a1d',
		title: 'Beautiful & luxurious apartment at great location',
		type: 'hotel',
		price: 112,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
		city: {
			name: 'Dusseldorf',
			location: {
				latitude: 51.225402,
				longitude: 6.776314,
				zoom: 13
			}
		},
		location: {
			latitude: 51.214402,
			longitude: 6.764314000000001,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 2.3
	},
	{
		id: '4ea886be-8f13-4359-a4ff-147f3e6d0370',
		title: 'House in countryside',
		type: 'apartment',
		price: 407,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
		city: {
			name: 'Dusseldorf',
			location: {
				latitude: 51.225402,
				longitude: 6.776314,
				zoom: 13
			}
		},
		location: {
			latitude: 51.225402,
			longitude: 6.784314,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 1.6
	}
]

export default OFFERS
