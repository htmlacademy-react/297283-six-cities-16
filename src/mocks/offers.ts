import { Offer } from '../types/offer'

const OFFERS: Offer[] = [
	{
		id: 'fe34d7e4-e74a-49f6-8caa-d42345f6b346',
		title: 'The Pondhouse - A Magical Place',
		type: 'room',
		price: 165,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
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
		rating: 2.4
	},
	{
		id: 'f0ab53f8-6b60-4a8a-a0b0-416e439c64d4',
		title: 'Loft Studio in the Central Area',
		type: 'room',
		price: 160,
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
			longitude: 4.902976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.7
	},
	{
		id: '702b2d17-bf3b-46bd-a3e7-3c7412066938',
		title: 'Nice, cozy, warm big bed apartment',
		type: 'hotel',
		price: 116,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
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
		isPremium: true,
		rating: 2.7
	},
	{
		id: '450625ec-1c09-454b-8cb8-7b64ceef3d78',
		title: 'Canal View Prinsengracht',
		type: 'house',
		price: 813,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.37454,
			longitude: 4.881976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: false,
		rating: 4.2
	},
	{
		id: '70e0e1d1-da62-4300-b078-f745ed7c1b34',
		title: 'Beautiful & luxurious apartment at great location',
		type: 'apartment',
		price: 470,
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
			latitude: 52.367540000000005,
			longitude: 4.883976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 3.5
	},
	{
		id: '6c98eccc-7d25-4815-9c31-f94c5e3fefe3',
		title: 'Penthouse, 4-5 rooms + 5 balconies',
		type: 'room',
		price: 106,
		previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.37454,
				longitude: 4.897976,
				zoom: 13
			}
		},
		location: {
			latitude: 52.361540000000005,
			longitude: 4.883976,
			zoom: 16
		},
		isFavorite: false,
		isPremium: true,
		rating: 2.5
	}
]

export default OFFERS
