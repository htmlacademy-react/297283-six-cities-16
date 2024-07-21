import { OfferFull } from '../types/offer'

const OFFER: OfferFull = {
	id: 'fe34d7e4-e74a-49f6-8caa-d42345f6b346',
	title: 'Nice, cozy, warm big bed apartment',
	description:
		'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
	type: 'house',
	price: 791,
	images: [
		'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
		'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
		'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
		'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
		'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
		'https://16.design.htmlacademy.pro/static/hotel/5.jpg'
	],
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
	goods: [
		'Washer',
		'Cable TV',
		'Air conditioning',
		'Wi-Fi',
		'Coffee machine',
		'Laptop friendly workspace',
		'Towels',
		'Washing machine',
		'Heating'
	],
	host: {
		isPro: true,
		name: 'Angelina',
		avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
	},
	isPremium: true,
	isFavorite: false,
	rating: 2.3,
	bedrooms: 5,
	maxAdults: 3
}

export default OFFER
