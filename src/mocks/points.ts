import OFFERS from './offers'
import { Point } from '../types/location'

const POINTS: Point[] = OFFERS.filter((offer) => offer.city.name === 'Amsterdam')
	.map((offer) => ({
		id: offer.id,
		title: offer.title,
		latitude: offer.location.latitude,
		longitude: offer.location.longitude
	}))
	.slice(0, 4)

export default POINTS
