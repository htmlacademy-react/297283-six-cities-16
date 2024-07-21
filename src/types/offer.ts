import { Cities, Location } from './location'

export interface Offer {
	id: string
	title: string
	type: string
	price: number
	city: {
		name: Cities
		location: Location
	}
	location: Location
	isFavorite: boolean
	isPremium: boolean
	rating: number
	previewImage: string
}

export type OfferCard = Omit<Offer, 'city' | 'location'>
