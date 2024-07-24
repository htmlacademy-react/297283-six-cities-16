import { Cities, Location } from './location'
import { User } from './user'

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
	previewImage?: string
}

export interface OfferFull extends Offer {
	description: string
	bedrooms: number
	goods: string[]
	host: User
	images: string[]
	maxAdults: number
}

export type OfferCard = Omit<Offer, 'city' | 'location'>
