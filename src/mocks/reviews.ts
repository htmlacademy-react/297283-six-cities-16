import { Review } from '../types/review'

const REVIEWS: Review[] = [
	{
		id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
		date: '2019-05-08T14:13:56.569Z',
		user: {
			name: 'Oliver Conner',
			avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
			isPro: false
		},
		comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
		rating: 4
	},
	{
		id: '7052ea44-e00d-425f-af35-7a20b1760b2d',
		comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
		date: '2024-06-30T21:00:00.413Z',
		rating: 1,
		user: {
			name: 'Kendall',
			avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
			isPro: false
		}
	}
]

export default REVIEWS
