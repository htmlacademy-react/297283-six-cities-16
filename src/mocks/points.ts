import OFFERS from './offers'
import { Point } from '../types/location'

const POINTS: Point[] = OFFERS.map((offer) => ({
	id: offer.id,
	title: offer.title,
	latitude: offer.location.latitude,
	longitude: offer.location.longitude
}))

export default POINTS
