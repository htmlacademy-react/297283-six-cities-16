import { UserShort } from './user'

export interface Review {
	id: string
	date: string
	user: UserShort
	comment: string
	rating: number
}

export interface ReviewForm {
	rating: number
	comment: string
}

export interface ReviewFormPayload {
	body: ReviewForm
	offerId: string
}
